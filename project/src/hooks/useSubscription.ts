import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export type SubscriptionPlan = 'basic' | 'pro';
export type SubscriptionStatus = 'active' | 'expired' | 'cancelled' | 'pending';

export interface Subscription {
  id: string;
  user_id: string;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  upi_transaction_id: string | null;
  amount_paid: number;
  starts_at: string | null;
  expires_at: string | null;
  created_at: string;
  updated_at: string;
}

export function useSubscription() {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);

  const fetchSubscription = useCallback(async () => {
    if (!user) {
      setSubscription(null);
      setIsPremium(false);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .eq('status', 'active')
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error('Error fetching subscription:', error);
        setIsPremium(false);
      } else if (data) {
        setSubscription(data as Subscription);
        // Check if subscription is active and not expired
        const isActive = data.status === 'active' && 
          (!data.expires_at || new Date(data.expires_at) > new Date());
        setIsPremium(isActive);
      } else {
        setSubscription(null);
        setIsPremium(false);
      }
    } catch (error) {
      console.error('Error in fetchSubscription:', error);
      setIsPremium(false);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchSubscription();
  }, [fetchSubscription]);

  const createSubscriptionRequest = async (
    plan: SubscriptionPlan,
    amountPaid: number,
    upiTransactionId?: string
  ) => {
    if (!user) return { error: new Error('User not logged in') };

    const { data, error } = await supabase
      .from('subscriptions')
      .insert({
        user_id: user.id,
        plan,
        status: 'pending',
        amount_paid: amountPaid,
        upi_transaction_id: upiTransactionId || null,
      })
      .select()
      .single();

    if (!error && data) {
      setSubscription(data as Subscription);
    }

    return { data, error };
  };

  return {
    subscription,
    loading,
    isPremium,
    createSubscriptionRequest,
    refetch: fetchSubscription,
  };
}
