import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Award,
  BookOpen,
  Code,
  Database,
  LineChart,
  TrendingUp,
  Users,
  Zap,
  Target,
  Brain,
  Rocket,
  Trophy,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  const achievements = [
    { number: "74%", label: "ML Model Accuracy", icon: Target },
    { number: "30%", label: "Performance Improvement", icon: TrendingUp },
    { number: "5+", label: "Published Papers", icon: BookOpen },
    { number: "87%", label: "Detection Accuracy", icon: Zap },
  ]

  const skills = [
    { name: "Python", level: 95, category: "Programming" },
    { name: "Machine Learning", level: 90, category: "AI/ML" },
    { name: "Deep Learning", level: 85, category: "AI/ML" },
    { name: "Data Analysis", level: 92, category: "Analytics" },
    { name: "SQL", level: 88, category: "Database" },
    { name: "TensorFlow", level: 82, category: "Frameworks" },
    { name: "Scikit-learn", level: 90, category: "Libraries" },
    { name: "Tableau", level: 85, category: "Visualization" },
  ]

  const experience = [
    {
      company: "University at Buffalo",
      role: "Researcher",
      duration: "March 2025 - Present",
      description: [
        "Led independent research on predictive modeling for graduate admissions, achieving 74% accuracy using advanced ML techniques and XAI.",
        "Published multiple papers in IEEE conferences on topics including fleet optimization and fake account detection.",
        "Developed and evaluated novel algorithms for explainable AI and optimization problems.",
      ],
    },
    {
      company: "Markytics",
      role: "Python Developer Intern",
      duration: "Jan 2024 - Jun 2024",
      description: [
        "Developed and optimized web applications using Python (Django, Flask) and modern frontend technologies, improving performance by 30%.",
        "Implemented RESTful APIs and integrated with various databases (SQL, NoSQL).",
        "Collaborated with cross-functional teams to design and deploy scalable solutions.",
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Floating Navigation */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
        <div className="bg-background/80 backdrop-blur-md border border-border/50 rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/70">
                <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-primary-foreground">
                  DS
                </span>
              </div>
              <span className="font-bold text-lg hidden sm:block">Deven Shah</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-primary">
                About
              </Link>
              <Link href="#experience" className="transition-colors hover:text-primary">
                Experience
              </Link>
              <Link href="#projects" className="transition-colors hover:text-primary">
                Projects
              </Link>
              <Link href="#skills" className="transition-colors hover:text-primary">
                Skills
              </Link>
              <Link href="#contact" className="transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild className="rounded-full">
                <Link href="https://github.com/ShahaDeven" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full">
                <Link href="https://linkedin.com/in/deven-shaha" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {/* Hero Section with Animated Background */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/20">
            {/* Sub-tle dot-grid overlay as a data-URI image */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                // prettier-ignore
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000' fillOpacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            />
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/8 rounded-full blur-lg animate-pulse delay-500"></div>

          <div className="container relative z-10 py-20">
            <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-16 xl:grid-cols-[1fr_500px] items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary border border-primary/20">
                    <Rocket className="h-4 w-4" />
                    Available for Opportunities
                  </div>
                  <h1 className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Deven Rahul Shah
                  </h1>
                  <div className="text-xl text-primary font-semibold">Data Scientist & ML Engineer</div>
                  <p className="max-w-[600px] text-lg text-muted-foreground leading-relaxed">
                    Transforming complex data into actionable insights through cutting-edge machine learning and
                    optimization techniques. Specialized in predictive modeling, deep learning, and data-driven
                    solutions.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>3 IEEE Publications</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Award-Winning Projects</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Research Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Industry Experience</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
                    asChild
                  >
                    <Link href="#contact">
                      Let's Work Together
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-2 hover:bg-primary/5 bg-transparent" asChild>
                    <Link href="/Deven_Rahul_Shah_Resume.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Link>
                  </Button>
                </div>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {["Python", "TensorFlow", "Scikit-learn", "Tableau", "SQL", "Deep Learning"].map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="px-3 py-1 text-sm bg-background/80 backdrop-blur border-primary/20 hover:bg-primary/5 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Enhanced Profile Image */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  {/* Animated Rings */}
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 animate-spin-slow"></div>
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/30 to-primary/20 animate-spin-reverse"></div>

                  {/* Profile Image */}
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-primary/50 opacity-75 blur-sm"></div>
                    <Avatar className="h-80 w-80 border-4 border-background relative shadow-2xl">
                      <AvatarImage src="/images/profile.jpeg" alt="Deven Shah" className="object-cover object-center"/>
                      <AvatarFallback className="text-6xl bg-gradient-to-br from-primary/20 to-primary/10">
                        DS
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Floating Badges */}
                  <div className="absolute -top-4 -right-4 bg-background border-2 border-primary/20 rounded-full p-3 shadow-lg animate-bounce">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-background border-2 border-primary/20 rounded-full p-3 shadow-lg animate-bounce delay-1000">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievement Stats */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10 border-y">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section with Enhanced Design */}
        <section id="about" className="py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-sm text-primary border border-primary/20 mb-6">
                <Users className="mr-2 h-4 w-4" />
                About Me
              </div>
              <h2 className="text-4xl font-bold mb-6">Passionate About Data-Driven Innovation</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Data Science graduate student at the University at Buffalo with a proven track record in machine
                learning, optimization, and data analysis. My research focuses on predictive modeling and explainable
                AI, with multiple IEEE publications and award-winning projects.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-16">
              {[
                {
                  icon: Database,
                  title: "Data Scientist",
                  description:
                    "Skilled in extracting insights from complex datasets using advanced statistical analysis, machine learning, and deep learning techniques with proven results.",
                },
                {
                  icon: Brain,
                  title: "AI Researcher",
                  description:
                    "Published researcher with focus on optimization algorithms, machine learning applications, and explainable AI. Multiple IEEE publications and patents.",
                },
                {
                  icon: Code,
                  title: "Full-Stack Developer",
                  description:
                    "Experienced in Python development with expertise in Django, Flask, and modern web technologies. Built scalable applications with 30% performance improvements.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-background/50"
                >
                  <CardHeader className="pb-4">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-primary/20 group-hover:from-primary/20 group-hover:to-primary/30 transition-all">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-sm text-primary border border-primary/20 mb-6">
                <Award className="mr-2 h-4 w-4" />
                Work Experience
              </div>
              <h2 className="text-4xl font-bold mb-6">My Professional Journey</h2>
              <p className="text-lg text-muted-foreground">
                A detailed overview of my professional roles, responsibilities, and key achievements.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-1">
              {experience.map((job, index) => (
                <Card
                  key={index}
                  className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{job.role}</CardTitle>
                      <Badge variant="secondary" className="text-sm">
                        {job.duration}
                      </Badge>
                    </div>
                    <CardDescription className="text-lg font-semibold text-muted-foreground">
                      {job.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {job.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section id="skills" className="py-24 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-sm text-primary border border-primary/20 mb-6">
                <Zap className="mr-2 h-4 w-4" />
                Technical Skills
              </div>
              <h2 className="text-4xl font-bold mb-6">Expertise & Proficiency</h2>
              <p className="text-lg text-muted-foreground">
                A comprehensive overview of my technical skills and proficiency levels across different domains.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {skills.map((skill, index) => (
                <div key={index} className="bg-background rounded-lg p-6 shadow-lg border border-border/50">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className="font-semibold">{skill.name}</div>
                      <div className="text-sm text-muted-foreground">{skill.category}</div>
                    </div>
                    <div className="text-2xl font-bold text-primary">{skill.level}%</div>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section id="projects" className="py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-sm text-primary border border-primary/20 mb-6">
                <Rocket className="mr-2 h-4 w-4" />
                Featured Projects
              </div>
              <h2 className="text-4xl font-bold mb-6">Portfolio Highlights</h2>
              <p className="text-lg text-muted-foreground">
                Showcasing my technical expertise through impactful real-world applications and research projects.
              </p>
            </div>

            {/* Featured Project */}
            <div className="mb-16">
              <Card className="overflow-hidden border-none shadow-2xl bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-12">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-sm text-primary mb-4">
                      <Award className="h-4 w-4" />
                      Featured Project
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Graduate Admission Prediction</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Led an independent research project under Dr. David Doermann to predict graduate admissions using
                      historical applicant data. Achieved 74% accuracy using advanced ML techniques and XAI.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge>Python</Badge>
                      <Badge>Scikit-learn</Badge>
                      <Badge>XAI</Badge>
                      <Badge>Research</Badge>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">74%</div>
                        <div className="text-sm text-muted-foreground">Accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">5+</div>
                        <div className="text-sm text-muted-foreground">Models</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">1000+</div>
                        <div className="text-sm text-muted-foreground">Data Points</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-primary/20 p-8 md:p-12 flex items-center justify-center">
                    <div className="text-center">
                      <Brain className="h-24 w-24 text-primary mx-auto mb-4" />
                      <div className="text-lg font-semibold">AI Research</div>
                      <div className="text-sm text-muted-foreground">Machine Learning & XAI</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Project Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Time Series Forecasting",
                  description: "LSTM-based sales forecasting with 82% R² score",
                  icon: LineChart,
                  tags: ["TensorFlow", "LSTM", "Time Series"],
                  metrics: { accuracy: "82%", type: "R² Score" },
                },
                {
                  title: "Fleet Optimization",
                  description: "Ant Colony Optimization for vehicle routing",
                  icon: Target,
                  tags: ["Optimization", "Python", "IEEE"],
                  metrics: { published: "IEEE", type: "Publication" },
                  link: "https://ieeexplore.ieee.org/document/10988157",
                },
                {
                  title: "Fake Account Detection",
                  description: "ML classifier with 87% accuracy",
                  icon: Database,
                  tags: ["Classification", "NLP", "Security"],
                  metrics: { accuracy: "87%", type: "Detection" },
                  link: "https://ieeexplore.ieee.org/document/10459570",
                },
                {
                  title: "Exoplanet Detection",
                  description: "Deep learning for space exploration",
                  icon: Rocket,
                  tags: ["Deep Learning", "NASA", "ANN"],
                  metrics: { accuracy: "88.3%", type: "Detection" },
                },
                {
                  title: "Happiness Prediction",
                  description: "SunHacks 2022 winner project",
                  icon: Trophy,
                  tags: ["NLP", "Twitter API", "Award"],
                  metrics: { award: "Winner", type: "SunHacks" },
                },
                {
                  title: "Agriculture Drone",
                  description: "Patented drone design for farming",
                  icon: Award,
                  tags: ["Hardware", "Patent", "Innovation"],
                  metrics: { patent: "Granted", type: "Design Patent" },
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary to-primary/50"></div>
                  <CardHeader className="pb-4">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-primary/20 group-hover:from-primary/20 group-hover:to-primary/30 transition-all">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-primary">
                        {project.metrics.accuracy ||
                          project.metrics.published ||
                          project.metrics.award ||
                          project.metrics.patent}
                      </div>
                      <div className="text-sm text-muted-foreground">{project.metrics.type}</div>
                    </div>
                  </CardContent>
                  {project.link && (
                    <CardFooter className="pt-0">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                      >
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-sm text-primary border border-primary/20 mb-6">
                <Mail className="mr-2 h-4 w-4" />
                Let's Connect
              </div>
              <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
              <p className="text-lg text-muted-foreground">
                I'm always interested in discussing new opportunities, collaborations, or innovative projects. Let's
                create something amazing together!
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {/* Contact Info */}
              <Card className="border-none shadow-xl bg-background/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <Link
                        href="mailto:deven.rshaha@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        deven.rshaha@gmail.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">LinkedIn</div>
                      <Link
                        href="https://linkedin.com/in/deven-shaha"
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        linkedin.com/in/deven-shaha
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">GitHub</div>
                      <Link
                        href="https://github.com/ShahaDeven"
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        github.com/ShahaDeven
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-muted-foreground">Buffalo, NY</div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                      asChild
                    >
                      <Link href="/Deven_Rahul_Shah_Resume.pdf" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card className="border-none shadow-xl bg-background/80 backdrop-blur">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>I'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        placeholder="Project collaboration, job opportunity, etc."
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        placeholder="Tell me about your project or opportunity..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="border-t bg-background/95 backdrop-blur">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-primary/70 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">DS</span>
                </div>
                <span className="font-bold text-lg">Deven Shah</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Data Scientist & ML Engineer passionate about transforming data into actionable insights.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/ShahaDeven"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com/in/deven-shaha"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:deven.rshaha@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
                <Link href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
                <Link href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-4">Ready to discuss your next project or opportunity?</p>
              <Button className="bg-gradient-to-r from-primary to-primary/80" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Deven Rahul Shah. All rights reserved. Built with Next.js & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
