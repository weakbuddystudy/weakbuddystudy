export interface PreviousYearPaper {
  year: number;
  papers: { title: string; url: string; type: 'Question Paper' | 'Marking Scheme' | 'Sample Paper' }[];
}

export interface StudyContent {
  class: number;
  subject: string;
  syllabus: string;
  pdfLinks: { title: string; url: string }[];
  previousYearPapers?: PreviousYearPaper[];
  cheatsheet: { title: string; items: string[] }[];
  examPapers: { difficulty: 'Easy' | 'Medium' | 'Hard'; question: string; marks: number; answer: string }[];
  interactiveLogic: { topic: string; steps: string[] };
}

export const subjects: Record<number, string[]> = {
  1: ['English', 'Mathematics', 'Environmental Studies'],
  2: ['English', 'Mathematics', 'Environmental Studies'],
  3: ['English', 'Mathematics', 'Environmental Studies'],
  4: ['English', 'Mathematics', 'Environmental Studies'],
  5: ['English', 'Mathematics', 'Environmental Studies'],
  6: ['English', 'Mathematics', 'Science', 'Social Science', 'Hindi'],
  7: ['English', 'Mathematics', 'Science', 'Social Science', 'Hindi'],
  8: ['English', 'Mathematics', 'Science', 'Social Science', 'Hindi'],
  9: ['English', 'Mathematics', 'Science', 'Social Science', 'Hindi'],
  10: ['English', 'Mathematics', 'Science', 'Social Science', 'Hindi'],
  11: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English', 'Computer Science'],
  12: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English', 'Computer Science'],
};

export const studyContent: Record<string, StudyContent> = {
  '10-Science': {
    class: 10,
    subject: 'Science',
    syllabus: `Class 10 Science covers five units: Chemical Substances (acids, bases, metals, carbon compounds), World of Living (life processes, heredity, evolution), Natural Phenomena (light, human eye), Effects of Current (electricity, magnetic effects), and Natural Resources (sources of energy, environment). The curriculum emphasizes practical applications and scientific reasoning, preparing students for board examinations and higher studies in science streams.`,
    pdfLinks: [
      { title: 'NCERT Science Textbook', url: 'https://ncert.nic.in/textbook.php?jesc1=0-16' },
      { title: 'Chapter 1: Chemical Reactions', url: 'https://ncert.nic.in/textbook.php?jesc1=1-16' },
      { title: 'Chapter 10: Light - Reflection and Refraction', url: 'https://ncert.nic.in/textbook.php?jesc1=10-16' },
      { title: 'Chapter 12: Electricity', url: 'https://ncert.nic.in/textbook.php?jesc1=12-16' },
      { title: 'CBSE Sample Paper 2025-26', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2025_26/Science-SQP.pdf' },
      { title: 'CBSE Marking Scheme 2025-26', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2025_26/Science-MS.pdf' },
      { title: 'myCBSEguide Sample Papers', url: 'https://mycbseguide.com/cbse-sample-papers.html' },
    ],
    previousYearPapers: [
      {
        year: 2025,
        papers: [
          { title: 'Science Sample Paper 2025-26', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2025_26/Science-SQP.pdf', type: 'Sample Paper' },
          { title: 'Marking Scheme 2025-26', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2025_26/Science-MS.pdf', type: 'Marking Scheme' },
        ],
      },
      {
        year: 2024,
        papers: [
          { title: 'Science Question Paper 2024', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2023_24/Science-SQP.pdf', type: 'Question Paper' },
          { title: 'Marking Scheme 2024', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2023_24/Science-MS.pdf', type: 'Marking Scheme' },
        ],
      },
      {
        year: 2023,
        papers: [
          { title: 'Science Question Paper 2023', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2022_23/Science-SQP.pdf', type: 'Question Paper' },
          { title: 'Marking Scheme 2023', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2022_23/Science-MS.pdf', type: 'Marking Scheme' },
        ],
      },
      {
        year: 2022,
        papers: [
          { title: 'Science Question Paper 2022', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2021_22/Science-SQP.pdf', type: 'Question Paper' },
          { title: 'Marking Scheme 2022', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2021_22/Science-MS.pdf', type: 'Marking Scheme' },
        ],
      },
      {
        year: 2021,
        papers: [
          { title: 'Science Question Paper 2021', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2020_21/Science-SQP.pdf', type: 'Question Paper' },
          { title: 'Marking Scheme 2021', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2020_21/Science-MS.pdf', type: 'Marking Scheme' },
        ],
      },
      {
        year: 2020,
        papers: [
          { title: 'Science Question Paper 2020', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2019_20/Science-SQP.pdf', type: 'Question Paper' },
        ],
      },
    ],
    cheatsheet: [
      {
        title: 'Chemical Reactions & Equations',
        items: [
          'Combination: $A + B \\rightarrow AB$',
          'Decomposition: $AB \\rightarrow A + B$',
          'Displacement: $A + BC \\rightarrow AC + B$',
          'Double Displacement: $AB + CD \\rightarrow AD + CB$',
          'Oxidation: Gain of oxygen or loss of hydrogen',
          'Reduction: Loss of oxygen or gain of hydrogen',
        ],
      },
      {
        title: 'Light & Optics',
        items: [
          'Mirror Formula: $\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}$',
          'Magnification: $m = \\frac{h\'}{h} = -\\frac{v}{u}$',
          'Lens Power: $P = \\frac{1}{f}$ (in metres, result in Dioptres)',
          'Snell\'s Law: $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$',
          'Refractive Index: $n = \\frac{c}{v}$',
        ],
      },
      {
        title: 'Electricity',
        items: [
          'Ohm\'s Law: $V = IR$',
          'Power: $P = VI = I^2R = \\frac{V^2}{R}$',
          'Series Resistance: $R_{eq} = R_1 + R_2 + R_3$',
          'Parallel Resistance: $\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$',
          'Electric Energy: $E = Pt = VIt$',
        ],
      },
    ],
    examPapers: [
      {
        difficulty: 'Easy',
        question: 'What is the chemical formula of baking soda? Write the equation for its thermal decomposition.',
        marks: 2,
        answer: 'Baking soda is Sodium Bicarbonate ($NaHCO_3$). Thermal decomposition: $2NaHCO_3 \\xrightarrow{\\Delta} Na_2CO_3 + H_2O + CO_2$',
      },
      {
        difficulty: 'Medium',
        question: 'A concave mirror produces a real image of height 2 cm of an object of height 0.5 cm placed 10 cm from the mirror. Calculate the position of the image and the focal length of the mirror.',
        marks: 3,
        answer: 'Given: $h = 0.5$ cm, $h\' = -2$ cm (real, inverted), $u = -10$ cm. Magnification $m = \\frac{h\'}{h} = \\frac{-2}{0.5} = -4$. Also $m = -\\frac{v}{u}$, so $-4 = -\\frac{v}{-10}$, giving $v = -40$ cm. Using mirror formula: $\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u} = \\frac{1}{-40} + \\frac{1}{-10} = \\frac{-5}{40}$. Therefore $f = -8$ cm.',
      },
      {
        difficulty: 'Hard',
        question: 'Three resistors of 2Ω, 3Ω, and 6Ω are connected in parallel across a 12V battery. Calculate: (a) the equivalent resistance, (b) total current drawn from the battery, (c) current through each resistor, and (d) total power consumed.',
        marks: 5,
        answer: '(a) $\\frac{1}{R_{eq}} = \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = \\frac{3+2+1}{6} = 1$, so $R_{eq} = 1Ω$. (b) Total current $I = \\frac{V}{R_{eq}} = \\frac{12}{1} = 12A$. (c) $I_1 = \\frac{12}{2} = 6A$, $I_2 = \\frac{12}{3} = 4A$, $I_3 = \\frac{12}{6} = 2A$. (d) Power $P = \\frac{V^2}{R_{eq}} = \\frac{144}{1} = 144W$.',
      },
    ],
    interactiveLogic: {
      topic: 'Understanding Lens Ray Diagrams',
      steps: [
        '**Step 1: Identify the Lens Type** - Convex lenses are thicker in the middle and converge light. Concave lenses are thinner in the middle and diverge light.',
        '**Step 2: Mark Key Points** - Draw the principal axis. Mark the optical center (O), principal focus (F) on both sides, and center of curvature (2F) on both sides.',
        '**Step 3: Draw Ray 1 (Parallel Ray)** - A ray parallel to the principal axis passes through the focus (F) after refraction in convex lens, or appears to come from F in concave lens.',
        '**Step 4: Draw Ray 2 (Central Ray)** - A ray passing through the optical center goes straight without deviation.',
        '**Step 5: Draw Ray 3 (Focus Ray)** - A ray passing through F (or directed towards F) becomes parallel to the principal axis after refraction.',
        '**Step 6: Locate the Image** - The point where refracted rays meet (or appear to meet) is where the image forms. Determine if it\'s real/virtual, inverted/erect, magnified/diminished.',
        '**Mathematical Verification**: Use lens formula $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$ to verify your graphical result.',
      ],
    },
  },
  '10-Mathematics': {
    class: 10,
    subject: 'Mathematics',
    syllabus: `Class 10 Mathematics encompasses Number Systems (real numbers, polynomials), Algebra (quadratic equations, arithmetic progressions), Coordinate Geometry (distance and section formulas), Geometry (triangles, circles, constructions), Trigonometry (ratios, identities, applications), Mensuration (surface areas and volumes), and Statistics & Probability. The curriculum builds strong foundational concepts essential for higher mathematics.`,
    pdfLinks: [
      { title: 'NCERT Mathematics Textbook', url: 'https://ncert.nic.in/textbook.php?jemh1=0-15' },
      { title: 'Chapter 4: Quadratic Equations', url: 'https://ncert.nic.in/textbook.php?jemh1=4-15' },
      { title: 'Chapter 8: Trigonometry', url: 'https://ncert.nic.in/textbook.php?jemh1=8-15' },
      { title: 'CBSE Maths Sample Paper 2025-26', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2025_26/Maths-SQP.pdf' },
      { title: 'CBSE Maths Marking Scheme', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2025_26/Maths-MS.pdf' },
      { title: 'myCBSEguide Sample Papers', url: 'https://mycbseguide.com/cbse-sample-papers.html' },
    ],
    previousYearPapers: [
      {
        year: 2025,
        papers: [
          { title: 'Mathematics Sample Paper 2025-26', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2025_26/Maths-SQP.pdf', type: 'Sample Paper' },
          { title: 'Marking Scheme 2025-26', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2025_26/Maths-MS.pdf', type: 'Marking Scheme' },
        ],
      },
      {
        year: 2024,
        papers: [
          { title: 'Mathematics Question Paper 2024', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2023_24/Maths-SQP.pdf', type: 'Question Paper' },
          { title: 'Marking Scheme 2024', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2023_24/Maths-MS.pdf', type: 'Marking Scheme' },
        ],
      },
      {
        year: 2023,
        papers: [
          { title: 'Mathematics Question Paper 2023', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2022_23/Maths-SQP.pdf', type: 'Question Paper' },
          { title: 'Marking Scheme 2023', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2022_23/Maths-MS.pdf', type: 'Marking Scheme' },
        ],
      },
      {
        year: 2022,
        papers: [
          { title: 'Mathematics Question Paper 2022', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2021_22/Maths-SQP.pdf', type: 'Question Paper' },
          { title: 'Marking Scheme 2022', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2021_22/Maths-MS.pdf', type: 'Marking Scheme' },
        ],
      },
      {
        year: 2021,
        papers: [
          { title: 'Mathematics Question Paper 2021', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2020_21/Maths-SQP.pdf', type: 'Question Paper' },
        ],
      },
      {
        year: 2020,
        papers: [
          { title: 'Mathematics Question Paper 2020', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2019_20/Maths-SQP.pdf', type: 'Question Paper' },
        ],
      },
    ],
    cheatsheet: [
      {
        title: 'Quadratic Equations',
        items: [
          'Standard Form: $ax^2 + bx + c = 0$',
          'Quadratic Formula: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$',
          'Sum of Roots: $\\alpha + \\beta = -\\frac{b}{a}$',
          'Product of Roots: $\\alpha \\cdot \\beta = \\frac{c}{a}$',
          'Discriminant: $D = b^2 - 4ac$ (D>0: two real roots, D=0: equal roots, D<0: no real roots)',
        ],
      },
      {
        title: 'Trigonometric Identities',
        items: [
          '$\\sin^2\\theta + \\cos^2\\theta = 1$',
          '$1 + \\tan^2\\theta = \\sec^2\\theta$',
          '$1 + \\cot^2\\theta = \\csc^2\\theta$',
          '$\\sin(90° - \\theta) = \\cos\\theta$',
          '$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$',
        ],
      },
      {
        title: 'Coordinate Geometry',
        items: [
          'Distance: $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$',
          'Midpoint: $M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$',
          'Section Formula: $\\left(\\frac{mx_2+nx_1}{m+n}, \\frac{my_2+ny_1}{m+n}\\right)$',
          'Area of Triangle: $\\frac{1}{2}|x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2)|$',
        ],
      },
    ],
    examPapers: [
      {
        difficulty: 'Easy',
        question: 'Find the roots of the quadratic equation $x^2 - 5x + 6 = 0$ using factorization.',
        marks: 2,
        answer: '$x^2 - 5x + 6 = 0$ can be factored as $(x-2)(x-3) = 0$. Therefore, $x = 2$ or $x = 3$.',
      },
      {
        difficulty: 'Medium',
        question: 'Prove that $\\frac{\\tan\\theta}{1 - \\cot\\theta} + \\frac{\\cot\\theta}{1 - \\tan\\theta} = 1 + \\sec\\theta\\csc\\theta$',
        marks: 4,
        answer: 'LHS = $\\frac{\\sin\\theta/\\cos\\theta}{1 - \\cos\\theta/\\sin\\theta} + \\frac{\\cos\\theta/\\sin\\theta}{1 - \\sin\\theta/\\cos\\theta}$ = $\\frac{\\sin^2\\theta}{\\cos\\theta(\\sin\\theta - \\cos\\theta)} + \\frac{\\cos^2\\theta}{\\sin\\theta(\\cos\\theta - \\sin\\theta)}$ = $\\frac{\\sin^3\\theta - \\cos^3\\theta}{\\sin\\theta\\cos\\theta(\\sin\\theta - \\cos\\theta)}$ = $\\frac{\\sin^2\\theta + \\sin\\theta\\cos\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta}$ = $\\frac{1 + \\sin\\theta\\cos\\theta}{\\sin\\theta\\cos\\theta}$ = $1 + \\sec\\theta\\csc\\theta$ = RHS',
      },
      {
        difficulty: 'Hard',
        question: 'The sum of first n terms of an AP is $3n^2 + 5n$. Find the AP and its 20th term.',
        marks: 5,
        answer: 'Given $S_n = 3n^2 + 5n$. For $n=1$: $S_1 = a_1 = 3(1) + 5 = 8$. For $n=2$: $S_2 = 3(4) + 10 = 22$, so $a_2 = S_2 - S_1 = 22 - 8 = 14$. Common difference $d = 14 - 8 = 6$. AP: 8, 14, 20, 26, ... The nth term: $a_n = S_n - S_{n-1} = 3n^2 + 5n - 3(n-1)^2 - 5(n-1) = 6n + 2$. 20th term: $a_{20} = 6(20) + 2 = 122$.',
      },
    ],
    interactiveLogic: {
      topic: 'Solving Quadratic Equations Using the Quadratic Formula',
      steps: [
        '**Step 1: Identify Coefficients** - Write the equation in standard form $ax^2 + bx + c = 0$. Identify values of $a$, $b$, and $c$.',
        '**Step 2: Calculate the Discriminant** - Compute $D = b^2 - 4ac$. This determines the nature of roots.',
        '**Step 3: Interpret the Discriminant** - If $D > 0$: Two distinct real roots. If $D = 0$: Two equal real roots. If $D < 0$: No real roots (complex roots).',
        '**Step 4: Apply the Formula** - Substitute into $x = \\frac{-b \\pm \\sqrt{D}}{2a}$',
        '**Step 5: Simplify** - Calculate both values: $x_1 = \\frac{-b + \\sqrt{D}}{2a}$ and $x_2 = \\frac{-b - \\sqrt{D}}{2a}$',
        '**Step 6: Verify** - Substitute roots back into original equation to confirm. Sum of roots should equal $-b/a$ and product should equal $c/a$.',
      ],
    },
  },
  '12-Physics': {
    class: 12,
    subject: 'Physics',
    syllabus: `Class 12 Physics covers Electrostatics (electric charges, potential, capacitance), Current Electricity (Ohm's law, Kirchhoff's rules), Magnetic Effects (moving charges, magnetism), Electromagnetic Induction (Faraday's laws, AC), Electromagnetic Waves, Optics (ray and wave optics), Dual Nature of Matter, Atoms & Nuclei, and Electronic Devices. The course develops analytical thinking and problem-solving skills essential for engineering and physics.`,
    pdfLinks: [
      { title: 'NCERT Physics Part 1', url: 'https://ncert.nic.in/textbook.php?leph1=0-8' },
      { title: 'NCERT Physics Part 2', url: 'https://ncert.nic.in/textbook.php?leph2=0-6' },
      { title: 'Chapter 1: Electric Charges and Fields', url: 'https://ncert.nic.in/textbook.php?leph1=1-8' },
      { title: 'Chapter 9: Ray Optics', url: 'https://ncert.nic.in/textbook.php?leph2=1-6' },
      { title: 'CBSE Physics Sample Paper 2025-26', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassXII_2025_26/Physics-SQP.pdf' },
      { title: 'CBSE Physics Marking Scheme', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassXII_2025_26/Physics-MS.pdf' },
      { title: 'myCBSEguide Sample Papers', url: 'https://mycbseguide.com/cbse-sample-papers.html' },
    ],
    previousYearPapers: [
      {
        year: 2025,
        papers: [
          { title: 'Physics Sample Paper 2025-26', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassXII_2025_26/Physics-SQP.pdf', type: 'Sample Paper' },
          { title: 'Marking Scheme 2025-26', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassXII_2025_26/Physics-MS.pdf', type: 'Marking Scheme' },
        ],
      },
      {
        year: 2024,
        papers: [
          { title: 'Physics Question Paper 2024', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassXII_2023_24/Physics-SQP.pdf', type: 'Question Paper' },
          { title: 'Marking Scheme 2024', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassXII_2023_24/Physics-MS.pdf', type: 'Marking Scheme' },
        ],
      },
      {
        year: 2023,
        papers: [
          { title: 'Physics Question Paper 2023', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassXII_2022_23/Physics-SQP.pdf', type: 'Question Paper' },
          { title: 'Marking Scheme 2023', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassXII_2022_23/Physics-MS.pdf', type: 'Marking Scheme' },
        ],
      },
      {
        year: 2022,
        papers: [
          { title: 'Physics Question Paper 2022', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassXII_2021_22/Physics-SQP.pdf', type: 'Question Paper' },
          { title: 'Marking Scheme 2022', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassXII_2021_22/Physics-MS.pdf', type: 'Marking Scheme' },
        ],
      },
      {
        year: 2021,
        papers: [
          { title: 'Physics Question Paper 2021', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassXII_2020_21/Physics-SQP.pdf', type: 'Question Paper' },
        ],
      },
      {
        year: 2020,
        papers: [
          { title: 'Physics Question Paper 2020', url: 'https://cbseacademic.nic.in/web_material/SQP/ClassXII_2019_20/Physics-SQP.pdf', type: 'Question Paper' },
        ],
      },
    ],
    cheatsheet: [
      {
        title: 'Electrostatics',
        items: [
          'Coulomb\'s Law: $F = \\frac{1}{4\\pi\\epsilon_0}\\frac{q_1q_2}{r^2}$',
          'Electric Field: $E = \\frac{F}{q} = \\frac{1}{4\\pi\\epsilon_0}\\frac{Q}{r^2}$',
          'Electric Potential: $V = \\frac{1}{4\\pi\\epsilon_0}\\frac{Q}{r}$',
          'Capacitance: $C = \\frac{Q}{V}$, Parallel Plate: $C = \\frac{\\epsilon_0 A}{d}$',
          'Energy in Capacitor: $U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}$',
        ],
      },
      {
        title: 'Electromagnetic Induction',
        items: [
          'Faraday\'s Law: $\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$',
          'Magnetic Flux: $\\Phi_B = BA\\cos\\theta$',
          'Self Inductance: $\\mathcal{E} = -L\\frac{dI}{dt}$',
          'Mutual Inductance: $\\mathcal{E}_2 = -M\\frac{dI_1}{dt}$',
          'Transformer: $\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$',
        ],
      },
      {
        title: 'Modern Physics',
        items: [
          'Photoelectric Effect: $E = h\\nu - \\phi$ (Einstein\'s equation)',
          'de Broglie Wavelength: $\\lambda = \\frac{h}{mv}$',
          'Bohr Radius: $r_n = \\frac{n^2h^2\\epsilon_0}{\\pi me^2}$',
          'Nuclear Binding Energy: $BE = [Zm_p + (A-Z)m_n - M]c^2$',
          'Radioactive Decay: $N = N_0 e^{-\\lambda t}$',
        ],
      },
    ],
    examPapers: [
      {
        difficulty: 'Easy',
        question: 'State Gauss\'s law in electrostatics. What is the electric flux through a closed surface enclosing a charge of 2μC?',
        marks: 2,
        answer: 'Gauss\'s Law: The total electric flux through a closed surface equals $\\frac{1}{\\epsilon_0}$ times the enclosed charge. $\\Phi = \\frac{q}{\\epsilon_0} = \\frac{2 \\times 10^{-6}}{8.85 \\times 10^{-12}} = 2.26 \\times 10^5$ Nm²/C',
      },
      {
        difficulty: 'Medium',
        question: 'In Young\'s double slit experiment, the slits are 0.5 mm apart and the screen is 1.2 m away. Find the distance between the 4th bright fringe and the central maximum if light of wavelength 600 nm is used.',
        marks: 3,
        answer: 'Given: $d = 0.5$ mm $= 5 \\times 10^{-4}$ m, $D = 1.2$ m, $\\lambda = 600$ nm $= 6 \\times 10^{-7}$ m. Position of nth bright fringe: $y_n = \\frac{n\\lambda D}{d}$. For 4th fringe: $y_4 = \\frac{4 \\times 6 \\times 10^{-7} \\times 1.2}{5 \\times 10^{-4}} = \\frac{28.8 \\times 10^{-7}}{5 \\times 10^{-4}} = 5.76 \\times 10^{-3}$ m $= 5.76$ mm',
      },
      {
        difficulty: 'Hard',
        question: 'Derive an expression for the energy stored in an inductor. An inductor of 2H is connected to a 12V battery through a 6Ω resistor. Calculate the time constant, maximum current, and energy stored when current reaches its maximum value.',
        marks: 5,
        answer: 'Derivation: Power $P = Li\\frac{di}{dt}$. Energy $U = \\int_0^I Li\\,di = \\frac{1}{2}LI^2$. Given: $L = 2H$, $V = 12V$, $R = 6Ω$. Time constant $\\tau = \\frac{L}{R} = \\frac{2}{6} = 0.33s$. Maximum current $I_0 = \\frac{V}{R} = \\frac{12}{6} = 2A$. Energy stored $U = \\frac{1}{2}LI_0^2 = \\frac{1}{2}(2)(2)^2 = 4J$',
      },
    ],
    interactiveLogic: {
      topic: 'Understanding Electromagnetic Induction',
      steps: [
        '**Step 1: Magnetic Flux Concept** - Magnetic flux $\\Phi_B = \\vec{B} \\cdot \\vec{A} = BA\\cos\\theta$ represents the "amount" of magnetic field passing through an area.',
        '**Step 2: Faraday\'s Discovery** - A changing magnetic flux induces an EMF. This is the foundation of generators and transformers.',
        '**Step 3: Faraday\'s Law** - Induced EMF: $\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$. The negative sign (Lenz\'s Law) indicates the induced current opposes the change.',
        '**Step 4: Methods to Change Flux** - (a) Change magnetic field B, (b) Change area A, (c) Change angle θ, (d) Move conductor through field.',
        '**Step 5: Motional EMF** - For a rod moving with velocity v in field B: $\\mathcal{E} = Blv$ (where l is the length of rod perpendicular to both B and v).',
        '**Step 6: Applications** - Generators: Rotating coil in magnetic field produces AC. Transformers: Changing flux in primary induces EMF in secondary coil.',
      ],
    },
  },
};

export function getStudyContent(classNum: number, subject: string): StudyContent | null {
  const key = `${classNum}-${subject}`;
  return studyContent[key] || null;
}

export function generateLiteContent(classNum: number, subject: string): StudyContent {
  return {
    class: classNum,
    subject: subject,
    syllabus: `Class ${classNum} ${subject} covers fundamental concepts and principles essential for academic excellence. The curriculum is designed according to NCERT/CBSE guidelines, focusing on conceptual understanding and practical applications.`,
    pdfLinks: [
      { title: `NCERT ${subject} Textbook`, url: `https://ncert.nic.in/textbook.php` },
      { title: 'CBSE Sample Papers 2025-26', url: 'https://cbseacademic.nic.in/' },
      { title: 'myCBSEguide Question Bank', url: 'https://mycbseguide.com/cbse-sample-papers.html' },
      { title: 'KVS Question Papers', url: 'https://kvsangathan.nic.in/' },
    ],
    cheatsheet: [
      {
        title: 'Key Concepts',
        items: [
          'Focus on understanding core principles',
          'Practice problems regularly',
          'Review NCERT examples thoroughly',
          'Make concise notes for revision',
        ],
      },
    ],
    examPapers: [
      {
        difficulty: 'Easy',
        question: `Define the fundamental concepts of ${subject} studied in Class ${classNum}.`,
        marks: 2,
        answer: 'Refer to NCERT textbook Chapter 1 for comprehensive definitions.',
      },
      {
        difficulty: 'Medium',
        question: `Apply the principles of ${subject} to solve a practical problem.`,
        marks: 3,
        answer: 'Use the formulas and methods discussed in class to approach the solution systematically.',
      },
      {
        difficulty: 'Hard',
        question: `Analyze and evaluate a complex ${subject} scenario using multiple concepts.`,
        marks: 5,
        answer: 'Integrate various principles, show step-by-step working, and verify your answer.',
      },
    ],
    interactiveLogic: {
      topic: 'Study Strategy',
      steps: [
        '**Step 1**: Read the chapter from NCERT textbook thoroughly.',
        '**Step 2**: Highlight key formulas, definitions, and concepts.',
        '**Step 3**: Solve all NCERT examples and exercises.',
        '**Step 4**: Practice previous year questions.',
        '**Step 5**: Take mock tests to assess your preparation.',
      ],
    },
  };
}
