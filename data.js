const flashcardData = {};

flashcardData.Mathematics = {
Trigonometry: {

  "Basic Trigonometric Ratios": [
    { q: "\\( \\sin\\theta \\)", a: "\\( \\frac{\\text{Opposite}}{\\text{Hypotenuse}} \\)", level: "blue" },
    { q: "\\( \\cos\\theta \\)", a: "\\( \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} \\)", level: "blue" },
    { q: "\\( \\tan\\theta \\)", a: "\\( \\frac{\\text{Opposite}}{\\text{Adjacent}} \\)", level: "blue" },
    { q: "\\( \\cot\\theta \\)", a: "\\( \\frac{1}{\\tan\\theta} \\)", level: "blue" },
    { q: "\\( \\sec\\theta \\)", a: "\\( \\frac{1}{\\cos\\theta} \\)", level: "blue" },
    { q: "\\( \\csc\\theta \\)", a: "\\( \\frac{1}{\\sin\\theta} \\)", level: "blue" }
  ],

  "Pythagorean Identities": [
    { q: "\\( \\sin^2\\theta + \\cos^2\\theta \\)", a: "\\( 1 \\)", level: "blue" },
    { q: "\\( 1 + \\tan^2\\theta \\)", a: "\\( \\sec^2\\theta \\)", level: "blue" },
    { q: "\\( 1 + \\cot^2\\theta \\)", a: "\\( \\csc^2\\theta \\)", level: "blue" }
  ],

  "Complementary Angles": [
    { q: "\\( \\sin(90^\\circ - \\theta) \\)", a: "\\( \\cos\\theta \\)", level: "blue" },
    { q: "\\( \\cos(90^\\circ - \\theta) \\)", a: "\\( \\sin\\theta \\)", level: "blue" },
    { q: "\\( \\tan(90^\\circ - \\theta) \\)", a: "\\( \\cot\\theta \\)", level: "blue" }
  ],

  "Trigonometric Identities (Sum & Difference)": [
    {
      q: "\\( \\sin(A+B) \\)",
      a: "\\( \\sin A \\cos B + \\cos A \\sin B \\)",
      level: "green"
    },
    {
      q: "\\( \\cos(A-B) \\)",
      a: "\\( \\cos A \\cos B + \\sin A \\sin B \\)",
      level: "green"
    },
    {
      q: "\\( \\tan(A+B) \\)",
      a: "\\( \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} \\)",
      level: "green"
    }
  ],

  "Double Angle Formulae": [
    { q: "\\( \\sin 2A \\)", a: "\\( 2 \\sin A \\cos A \\)", level: "green" },
    { q: "\\( \\cos 2A \\)", a: "\\( \\cos^2 A - \\sin^2 A \\)", level: "green" },
    {
      q: "\\( \\tan 2A \\)",
      a: "\\( \\frac{2 \\tan A}{1 - \\tan^2 A} \\)",
      level: "green"
    }
  ],

  "Advanced Trigonometry": [
    {
      q: "\\( \\sin 3A \\)",
      a: "\\( 3 \\sin A - 4 \\sin^3 A \\)",
      level: "red"
    },
    {
      q: "\\( \\cos 3A \\)",
      a: "\\( 4 \\cos^3 A - 3 \\cos A \\)",
      level: "red"
    },
    {
      q: "\\( \\tan 3A \\)",
      a: "\\( \\frac{3 \\tan A - \\tan^3 A}{1 - 3 \\tan^2 A} \\)",
      level: "red"
    }
  ],

  "Half Angle Formulae": [
    {
      q: "\\( \\sin^2\\left(\\frac{A}{2}\\right) \\)",
      a: "\\( \\frac{1 - \\cos A}{2} \\)",
      level: "red"
    },
    {
      q: "\\( \\cos^2\\left(\\frac{A}{2}\\right) \\)",
      a: "\\( \\frac{1 + \\cos A}{2} \\)",
      level: "red"
    },
    {
      q: "\\( \\tan\\left(\\frac{A}{2}\\right) \\)",
      a: "\\( \\frac{\\sin A}{1 + \\cos A} \\)",
      level: "red"
    }
  ],

  "Triangle Laws": [
    {
      q: "\\( \\text{Law of Sines} \\)",
      a: "\\( \\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} \\)",
      level: "red"
    },
    {
      q: "\\( \\text{Law of Cosines} \\)",
      a: "\\( c^2 = a^2 + b^2 - 2ab \\cos C \\)",
      level: "red"
    }
  ],

  "Hyperbolic Functions": [
    {
      q: "\\( \\sinh x \\)",
      a: "\\( \\frac{e^x - e^{-x}}{2} \\)",
      level: "red"
    },
    {
      q: "\\( \\cosh x \\)",
      a: "\\( \\frac{e^x + e^{-x}}{2} \\)",
      level: "red"
    },
    {
      q: "\\( \\cosh^2 x - \\sinh^2 x \\)",
      a: "\\( 1 \\)",
      level: "red"
    }
  ]

},


Algebra: {

  /* 🔵 CLASS 10 — BASIC IDENTITIES */
  "Basic Identities": [
    { q: "\\( (a+b)^2 \\)", a: "\\( a^2 + 2ab + b^2 \\)", level: "blue" },
    { q: "\\( (a-b)^2 \\)", a: "\\( a^2 - 2ab + b^2 \\)", level: "blue" },
    { q: "\\( (a+b)(a-b) \\)", a: "\\( a^2 - b^2 \\)", level: "blue" }
  ],

  /* 🔵 CUBES & EXPANSIONS */
  "Cubes & Expansions": [
    { q: "\\( (a+b)^3 \\)", a: "\\( a^3 + b^3 + 3ab(a+b) \\)", level: "blue" },
    { q: "\\( (a-b)^3 \\)", a: "\\( a^3 - b^3 - 3ab(a-b) \\)", level: "blue" },
    { q: "\\( a^3 + b^3 \\)", a: "\\( (a+b)(a^2 - ab + b^2) \\)", level: "blue" },
    { q: "\\( a^3 - b^3 \\)", a: "\\( (a-b)(a^2 + ab + b^2) \\)", level: "blue" }
  ],

  /* 🟢 QUADRATIC EQUATIONS */
  "Quadratic Equations": [
    {
      q: "\\( \\text{Quadratic Formula} \\)",
      a: "\\( x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\)",
      level: "green"
    },
    {
      q: "\\( \\text{Discriminant} \\)",
      a: "\\( D = b^2 - 4ac \\)",
      level: "green"
    },
    {
      q: "\\( \\text{Nature of Roots} \\)",
      a: "\\( D>0: \\text{Real & Distinct} \\\\ D=0: \\text{Equal} \\\\ D<0: \\text{Imaginary} \\)",
      level: "green"
    }
  ],

  /* 🟢 PROGRESSIONS (AP & GP) */
  "Progressions (AP & GP)": [
    {
      q: "\\( \\text{AP nth Term} \\)",
      a: "\\( a_n = a + (n-1)d \\)",
      level: "green"
    },
    {
      q: "\\( \\text{AP Sum} \\)",
      a: "\\( S_n = \\frac{n}{2}[2a+(n-1)d] \\)",
      level: "green"
    },
    {
      q: "\\( \\text{GP Sum} \\)",
      a: "\\( S_n = \\frac{a(r^n - 1)}{r - 1} \\)",
      level: "green"
    }
  ],

  /* 🔴 BINOMIAL THEOREM */
  "Binomial Theorem": [
    {
      q: "\\( (a+b)^n \\)",
      a: "\\( \\sum_{r=0}^{n} {n \\choose r} a^{n-r} b^r \\)",
      level: "red"
    },
    {
      q: "\\( \\text{General Term} \\)",
      a: "\\( T_{r+1} = {n \\choose r} a^{n-r} b^r \\)",
      level: "red"
    }
  ],

  /* 🔴 SUMMATION FORMULAE */
  "Summation Formulae": [
    { q: "\\( \\sum n \\)", a: "\\( \\frac{n(n+1)}{2} \\)", level: "red" },
    { q: "\\( \\sum n^2 \\)", a: "\\( \\frac{n(n+1)(2n+1)}{6} \\)", level: "red" },
    {
      q: "\\( \\sum n^3 \\)",
      a: "\\( \\left( \\frac{n(n+1)}{2} \\right)^2 \\)",
      level: "red"
    }
  ],

  /* 🔴 POLYNOMIAL THEOREMS */
  "Polynomial Theorems": [
    {
      q: "\\( \\text{Remainder Theorem} \\)",
      a: "\\( \\text{Remainder of } f(x) \\div (x-a) = f(a) \\)",
      level: "red"
    },
    {
      q: "\\( \\text{Factor Theorem} \\)",
      a: "\\( f(a)=0 \\Rightarrow (x-a) \\text{ is a factor} \\)",
      level: "red"
    }
  ],

  /* 🔴 LOGARITHMS & EXPONENTIALS */
  "Logarithms & Exponentials": [
    { q: "\\( \\log(ab) \\)", a: "\\( \\log a + \\log b \\)", level: "red" },
    { q: "\\( \\log\\left(\\frac{a}{b}\\right) \\)", a: "\\( \\log a - \\log b \\)", level: "red" },
    { q: "\\( \\log(a^n) \\)", a: "\\( n \\log a \\)", level: "red" },
    {
      q: "\\( e^x \\)",
      a: "\\( \\lim_{n \\to \\infty} \\left(1+\\frac{x}{n}\\right)^n \\)",
      level: "red"
    }
  ],

  /* 🔴 SERIES EXPANSIONS (ENGINEERING) */
  "Series Expansions": [
    {
      q: "\\( e^x \\)",
      a: "\\( 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots \\)",
      level: "red"
    },
    {
      q: "\\( \\sin x \\)",
      a: "\\( x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots \\)",
      level: "red"
    },
    {
      q: "\\( \\cos x \\)",
      a: "\\( 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots \\)",
      level: "red"
    }
  ]

},

Calculus: {

  "Limits (Class 11)": [
    {
      q: "\\( \\lim_{x \\to a} f(x) \\)",
      a: "\\( \\text{Value of } f(x) \\text{ as } x \\to a \\)",
      level: "blue"
    },
    {
      q: "\\( \\lim_{x \\to 0} \\frac{\\sin x}{x} \\)",
      a: "\\(1\\)",
      level: "blue"
    },
    {
      q: "\\( \\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} \\)",
      a: "\\( \\frac{1}{2} \\)",
      level: "blue"
    },
    {
      q: "\\( \\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x \\)",
      a: "\\( e \\)",
      level: "blue"
    }
  ],

  "Derivatives – Basic Rules": [
    { q: "\\( \\frac{d}{dx}(c) \\)", a: "\\(0\\)", level: "blue" },
    { q: "\\( \\frac{d}{dx}(x^n) \\)", a: "\\( n x^{n-1} \\)", level: "blue" },
    { q: "\\( \\frac{d}{dx}(e^x) \\)", a: "\\( e^x \\)", level: "blue" },
    { q: "\\( \\frac{d}{dx}(\\ln x) \\)", a: "\\( \\frac{1}{x} \\)", level: "blue" },
    { q: "\\( \\frac{d}{dx}(\\sin x) \\)", a: "\\( \\cos x \\)", level: "blue" },
    { q: "\\( \\frac{d}{dx}(\\cos x) \\)", a: "\\( -\\sin x \\)", level: "blue" },
    { q: "\\( \\frac{d}{dx}(\\tan x) \\)", a: "\\( \\sec^2 x \\)", level: "blue" }
  ],

  "Differentiation Rules (Class 12)": [
    {
      q: "\\( \\text{Product Rule} \\)",
      a: "\\( (uv)' = u'v + uv' \\)",
      level: "green"
    },
    {
      q: "\\( \\text{Quotient Rule} \\)",
      a: "\\( \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2} \\)",
      level: "green"
    },
    {
      q: "\\( \\text{Chain Rule} \\)",
      a: "\\( \\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx} \\)",
      level: "green"
    }
  ],

  "Integration – Basic": [
    {
      q: "\\( \\int x^n \\, dx \\)",
      a: "\\( \\frac{x^{n+1}}{n+1} + C,\\; n \\neq -1 \\)",
      level: "green"
    },
    { q: "\\( \\int e^x \\, dx \\)", a: "\\( e^x + C \\)", level: "green" },
    { q: "\\( \\int \\frac{1}{x} \\, dx \\)", a: "\\( \\ln |x| + C \\)", level: "green" },
    { q: "\\( \\int \\sin x \\, dx \\)", a: "\\( -\\cos x + C \\)", level: "green" },
    { q: "\\( \\int \\cos x \\, dx \\)", a: "\\( \\sin x + C \\)", level: "green" },
    { q: "\\( \\int \\sec^2 x \\, dx \\)", a: "\\( \\tan x + C \\)", level: "green" }
  ],

  "Definite Integrals": [
    {
      q: "\\( \\int_a^b f(x) \\, dx \\)",
      a: "\\( F(b) - F(a) \\)",
      level: "green"
    },
    {
      q: "\\( \\int_{-a}^{a} f(x) \\, dx \\; (\\text{even}) \\)",
      a: "\\( 2 \\int_0^a f(x) \\, dx \\)",
      level: "green"
    },
    {
      q: "\\( \\int_{-a}^{a} f(x) \\, dx \\; (\\text{odd}) \\)",
      a: "\\( 0 \\)",
      level: "green"
    }
  ],

  "Important Integrals (Engineering)": [
    {
      q: "\\( \\int \\frac{1}{1+x^2} \\, dx \\)",
      a: "\\( \\tan^{-1} x + C \\)",
      level: "red"
    },
    {
      q: "\\( \\int \\frac{1}{\\sqrt{1-x^2}} \\, dx \\)",
      a: "\\( \\sin^{-1} x + C \\)",
      level: "red"
    },
    {
      q: "\\( \\int \\frac{1}{\\sqrt{1+x^2}} \\, dx \\)",
      a: "\\( \\sinh^{-1} x + C \\)",
      level: "red"
    }
  ],

  "Differential Equations": [
    {
      q: "\\( \\frac{dy}{dx} + Py = Q \\)",
      a: "\\( y e^{\\int P dx} = \\int Q e^{\\int P dx} \\, dx + C \\)",
      level: "red"
    }
  ],

  "Partial Derivatives": [
    {
      q: "\\( \\frac{\\partial f}{\\partial x} \\)",
      a: "\\( \\text{Partial derivative w.r.t } x \\)",
      level: "red"
    },
    {
      q: "\\( \\frac{\\partial f}{\\partial y} \\)",
      a: "\\( \\text{Partial derivative w.r.t } y \\)",
      level: "red"
    }
  ],

  "Maxima & Minima": [
    {
      q: "\\( f'(x)=0,\\; f''(x)>0 \\)",
      a: "\\( \\text{Local Minimum} \\)",
      level: "red"
    },
    {
      q: "\\( f'(x)=0,\\; f''(x)<0 \\)",
      a: "\\( \\text{Local Maximum} \\)",
      level: "red"
    }
  ],

  "Applications of Calculus": [
    {
      q: "\\( \\text{Area under curve} \\)",
      a: "\\( A = \\int_a^b f(x) \\, dx \\)",
      level: "red"
    },
    {
      q: "\\( \\text{Volume of revolution} \\)",
      a: "\\( V = \\pi \\int_a^b [f(x)]^2 \\, dx \\)",
      level: "red"
    },
    {
      q: "\\( \\text{Mean Value Theorem} \\)",
      a: "\\( \\exists c \\in (a,b) \\text{ such that } f'(c)=\\frac{f(b)-f(a)}{b-a} \\)",
      level: "red"
    }
  ]

},

Sequence_and_Series: {

  "Standard Limits": [
    { q: "\\( \\lim_{n \\to \\infty} \\frac{1}{n} \\)", a: "\\(0\\)", level: "blue" },
    { q: "\\( \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n \\)", a: "\\(e\\)", level: "blue" },
    { q: "\\( \\lim_{n \\to \\infty} x^n \\; (x > 1) \\)", a: "\\(\\infty\\)", level: "blue" },
    { q: "\\( \\lim_{n \\to \\infty} x^n \\; (|x| < 1) \\)", a: "\\(0\\)", level: "blue" },
    { q: "\\( \\lim_{n \\to \\infty} x^n \\; (x = 1) \\)", a: "\\(1\\)", level: "blue" },
    { q: "\\( \\lim_{n \\to \\infty} \\frac{x^n}{n!} \\)", a: "\\(0\\)", level: "blue" },
    { q: "\\( \\lim_{n \\to \\infty} \\frac{\\log n}{n} \\)", a: "\\(0\\)", level: "blue" },
    { q: "\\( \\lim_{n \\to \\infty} (n!)^{1/n} \\)", a: "\\(\\infty\\)", level: "blue" },
    { q: "\\( \\lim_{n \\to \\infty} \\left( \\frac{n!}{n^n} \\right)^{1/n} \\)", a: "\\( \\frac{1}{e} \\)", level: "blue" }
  ],

  "Comparison Test": [
    {
      q: "\\( \\text{Comparison Test} \\)",
      a: "\\( 0 \\le u_n \\le v_n,\\; \\sum v_n \\text{ converges } \\Rightarrow \\sum u_n \\text{ converges} \\)",
      level: "blue"
    },
    {
      q: "\\( \\text{Limit Comparison Test} \\)",
      a: "\\( \\lim_{n\\to\\infty} \\frac{u_n}{v_n} = L,\\; 0 < L < \\infty \\Rightarrow \\text{same behavior} \\)",
      level: "blue"
    },
    {
      q: "\\( p\\text{-Test} \\)",
      a: "\\( \\sum \\frac{1}{n^p} \\text{ converges if } p>1, \\text{ diverges if } p\\le1 \\)",
      level: "blue"
    }
  ],

  "D’Alembert Ratio Test": [
    {
      q: "\\( \\text{Ratio Test Formula} \\)",
      a: "\\( L = \\lim_{n\\to\\infty} \\frac{u_{n+1}}{u_n} \\)",
      level: "red"
    },
    {
      q: "\\( \\text{Ratio Test Result} \\)",
      a: "\\( L<1 \\Rightarrow \\text{converges},\\; L>1 \\Rightarrow \\text{diverges},\\; L=1 \\Rightarrow \\text{inconclusive} \\)",
      level: "red"
    }
  ],

  "Raabe’s Test": [
    {
      q: "\\( \\text{Raabe’s Test Formula} \\)",
      a: "\\( R = \\lim_{n\\to\\infty} n\\left( \\frac{u_n}{u_{n+1}} - 1 \\right) \\)",
      level: "red"
    },
    {
      q: "\\( \\text{Raabe’s Test Result} \\)",
      a: "\\( R>1 \\Rightarrow \\text{converges},\\; R<1 \\Rightarrow \\text{diverges},\\; R=1 \\Rightarrow \\text{inconclusive} \\)",
      level: "red"
    }
  ],

  "Cauchy Root Test": [
    {
      q: "\\( \\text{Root Test Formula} \\)",
      a: "\\( L = \\lim_{n\\to\\infty} \\sqrt[n]{u_n} \\)",
      level: "green"
    },
    {
      q: "\\( \\text{Root Test Result} \\)",
      a: "\\( L<1 \\Rightarrow \\text{converges},\\; L>1 \\Rightarrow \\text{diverges},\\; L=1 \\Rightarrow \\text{inconclusive} \\)",
      level: "green"
    }
  ],

  "Leibniz Test (Alternating Series)": [
    {
      q: "\\( \\text{Leibniz Test Conditions} \\)",
      a: "\\( u_n \\text{ decreasing and } \\lim_{n\\to\\infty} u_n = 0 \\)",
      level: "green"
    },
    {
      q: "\\( \\text{Absolute Convergence} \\)",
      a: "\\( \\sum |u_n| \\text{ converges } \\Rightarrow \\text{absolutely convergent} \\)",
      level: "green"
    }
  ]

},


};
flashcardData.Physics = {

  Constants : {


    " Fundamental Constants": [ 
    { q: "Speed of light (c)", a: "2.99792458 × 10⁸ m/s", level: "blue" },
    { q: "Gravitational constant (G)", a: "6.67430 × 10⁻¹¹ m³ kg⁻¹ s⁻²", level: "blue" },
    { q: "Planck constant (h)", a: "6.62607015 × 10⁻³⁴ J·s", level: "blue" },
    { q: "Reduced Planck constant (ħ)", a: "1.054571817 × 10⁻³⁴ J·s", level: "blue" },
    { q: "Boltzmann constant (k)", a: "1.380649 × 10⁻²³ J/K", level: "blue" },
    { q: "Avogadro constant (Nₐ)", a: "6.02214076 × 10²³ mol⁻¹", level: "blue" },
    { q: "Elementary charge (e)", a: "1.602176634 × 10⁻¹⁹ C", level: "blue" },
    ],
    "Electromagnetic Constants": [
    { q: "Vacuum permittivity (ε₀)", a: "8.8541878128 × 10⁻¹² F/m", level: "green" },
    { q: "Vacuum permeability (μ₀)", a: "4π × 10⁻⁷ N/A²", level: "green" },
    { q: "Impedance of free space (Z₀)", a: "376.73 Ω", level: "green" },
    ],
    "Atomic & Particle Constants": [
    { q: "Electron mass (mₑ)", a: "9.10938356 × 10⁻³¹ kg", level: "red" },
    { q: "Proton mass (mₚ)", a: "1.6726219 × 10⁻²⁷ kg", level: "red" },
    { q: "Neutron mass (mₙ)", a: "1.6749275 × 10⁻²⁷ kg", level: "red" },
    { q: "Atomic mass unit (u)", a: "1.6605390666 × 10⁻²⁷ kg", level: "red" },
    { q: "Electron volt (1 eV)", a: "1.602176634 × 10⁻¹⁹ J", level: "red" },
    ], 

    "Thermodynamic Constants": [
    { q: "Stefan–Boltzmann constant (σ)", a: "5.670374419 × 10⁻⁸ W m⁻² K⁻⁴", level: "red" },
    { q: "Gas constant (R)", a: "8.314462618 J mol⁻¹ K⁻¹", level: "red" },
    { q: "Faraday constant (F)", a: "96485 C/mol", level: "red" }
    ],
  }
};
