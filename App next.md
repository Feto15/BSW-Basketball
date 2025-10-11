import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MapPin,
  Mail,
  Calendar,
  Users,
  Trophy,
  Target,
  Star,
  Clock,
  Award,
  Shield,
  Zap,
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Menu,
  Plus,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BSWBasketballWebsite() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-neutral-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Club Name */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center">
                <span className="text-lime-400 font-black text-xl">BSW</span>
              </div>
              <div>
                <h1 className="text-2xl font-black text-neutral-900 uppercase tracking-tight">BSW Basketball</h1>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="#home"
                className="text-neutral-900 hover:text-lime-400 font-bold uppercase text-sm tracking-wide transition-colors"
              >
                Home
              </Link>
              <Link
                href="#programs"
                className="text-neutral-900 hover:text-lime-400 font-bold uppercase text-sm tracking-wide transition-colors"
              >
                Programs
              </Link>
              <Link
                href="#about"
                className="text-neutral-900 hover:text-lime-400 font-bold uppercase text-sm tracking-wide transition-colors"
              >
                About
              </Link>
              <Link
                href="#gallery"
                className="text-neutral-900 hover:text-lime-400 font-bold uppercase text-sm tracking-wide transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="#news"
                className="text-neutral-900 hover:text-lime-400 font-bold uppercase text-sm tracking-wide transition-colors"
              >
                News
              </Link>
              <Link
                href="#contact"
                className="text-neutral-900 hover:text-lime-400 font-bold uppercase text-sm tracking-wide transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Phone and Registration */}
            <div className="flex items-center space-x-6">
              <div className="hidden xl:flex items-center space-x-3 text-neutral-900">
                <Phone className="h-5 w-5" />
                <span className="font-medium">(555) 123-4567</span>
              </div>
              <Button className="bg-lime-400 hover:bg-lime-500 text-neutral-900 font-bold uppercase tracking-wide px-6 py-3 rounded-lg transition-all hover:scale-105">
                Register Now
              </Button>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[80vh] flex items-center justify-center bg-neutral-900 overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1400"
            alt="Kids playing basketball"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-neutral-900/60"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-lime-400 rotate-45"></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 border-2 border-lime-400 rotate-45"></div>
        <Plus className="absolute top-40 left-1/4 h-8 w-8 text-lime-400 opacity-60" />

        <div className="relative z-10 text-left max-w-6xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              DEVELOP YOUR
              <span className="block text-lime-400">GAME</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 font-medium mb-12 max-w-2xl leading-relaxed">
              Building champions on and off the court through expert coaching and character development
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-lime-400 hover:bg-lime-500 text-neutral-900 font-bold uppercase tracking-wide px-8 py-4 text-lg rounded-lg transition-all hover:scale-105"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 font-bold uppercase tracking-wide px-8 py-4 text-lg rounded-lg transition-all bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-neutral-900 uppercase tracking-tighter mb-6">
                ABOUT BSW
              </h2>
              <div className="w-24 h-1 bg-lime-400 mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-neutral-600 font-medium max-w-4xl mx-auto leading-relaxed">
                For over 15 years, BSW Basketball has been dedicated to developing young athletes through comprehensive
                training programs that focus on skill development, teamwork, and character building.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { icon: Users, title: "EXPERT COACHING", desc: "Professional coaches with years of experience" },
                {
                  icon: Target,
                  title: "SKILL DEVELOPMENT",
                  desc: "Focused training on fundamentals and advanced techniques",
                },
                {
                  icon: Trophy,
                  title: "COMPETITIVE PLAY",
                  desc: "Opportunities to compete in local and regional tournaments",
                },
                { icon: Heart, title: "CHARACTER BUILDING", desc: "Emphasis on sportsmanship and personal growth" },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-neutral-50 border-0 rounded-xl p-8 hover:shadow-lg transition-all hover:scale-105"
                >
                  <CardContent className="p-0 text-center">
                    <div className="w-16 h-16 bg-lime-400 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <item.icon className="h-8 w-8 text-neutral-900" />
                    </div>
                    <h3 className="font-black text-neutral-900 uppercase tracking-wide text-sm mb-4">{item.title}</h3>
                    <p className="text-neutral-600 font-medium text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white font-bold uppercase tracking-wide px-8 py-4 rounded-lg transition-all bg-transparent"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section id="programs" className="py-24 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
                OUR PROGRAMS
              </h2>
              <div className="w-24 h-1 bg-lime-400 mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-neutral-300 font-medium max-w-3xl mx-auto leading-relaxed">
                Age-appropriate training programs designed to develop skills progressively
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "ELEMENTARY",
                  age: "Ages 6-10",
                  days: "Tuesdays & Thursdays",
                  time: "4:00 PM - 5:00 PM",
                  desc: "Introduction to basketball fundamentals with emphasis on fun, basic skills, and teamwork.",
                  badge: "Beginner Friendly",
                  badgeColor: "bg-lime-400 text-neutral-900",
                },
                {
                  title: "MIDDLE SCHOOL",
                  age: "Ages 11-14",
                  days: "Mon, Wed, Fri",
                  time: "5:30 PM - 7:00 PM",
                  desc: "Advanced skill development, game strategy, and competitive play preparation.",
                  badge: "Intermediate",
                  badgeColor: "bg-blue-500 text-white",
                },
                {
                  title: "HIGH SCHOOL",
                  age: "Ages 15-18",
                  days: "Daily Training",
                  time: "7:00 PM - 9:00 PM",
                  desc: "Elite training program focusing on college preparation and advanced competition.",
                  badge: "Advanced",
                  badgeColor: "bg-red-500 text-white",
                },
              ].map((program, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 rounded-xl overflow-hidden hover:shadow-xl transition-all hover:scale-105"
                >
                  <CardHeader className="p-0">
                    <div className="w-full h-48 relative">
                      <Image
                        src={`/placeholder.svg?height=200&width=300&query=basketball training ${program.title.toLowerCase()}`}
                        alt={`${program.title} basketball training`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-black text-neutral-900 uppercase tracking-tight mb-2">
                        {program.title}
                      </h3>
                      <p className="text-neutral-600 font-bold uppercase text-sm tracking-wide">{program.age}</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-lime-400" />
                        <span className="text-neutral-700 font-medium">{program.days}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-lime-400" />
                        <span className="text-neutral-700 font-medium">{program.time}</span>
                      </div>
                    </div>

                    <p className="text-neutral-600 font-medium mb-6 leading-relaxed">{program.desc}</p>

                    <Badge className={`${program.badgeColor} font-bold uppercase tracking-wide`}>{program.badge}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-lime-400 hover:bg-lime-500 text-neutral-900 font-bold uppercase tracking-wide px-8 py-4 rounded-lg transition-all hover:scale-105"
              >
                View All Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-neutral-900 uppercase tracking-tighter mb-6">
                WHY CHOOSE BSW?
              </h2>
              <div className="w-24 h-1 bg-lime-400 mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-neutral-600 font-medium max-w-3xl mx-auto leading-relaxed">
                We provide the best environment for young athletes to grow and excel
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "EXPERIENCED COACHES",
                  desc: "Our coaching staff has over 50 years of combined experience in player development.",
                },
                {
                  icon: Shield,
                  title: "MODERN FACILITIES",
                  desc: "State-of-the-art training facilities with professional-grade equipment and courts.",
                },
                {
                  icon: Trophy,
                  title: "PROVEN RESULTS",
                  desc: "85% of our players improve their skills significantly within their first season.",
                },
                {
                  icon: Users,
                  title: "SMALL CLASS SIZES",
                  desc: "Maximum 12 players per group ensures personalized attention for every athlete.",
                },
                {
                  icon: Zap,
                  title: "FLEXIBLE SCHEDULING",
                  desc: "Multiple training times available to accommodate busy family schedules.",
                },
                {
                  icon: Heart,
                  title: "CHARACTER DEVELOPMENT",
                  desc: "Focus on building confidence, leadership, and sportsmanship alongside basketball skills.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 p-6 bg-white rounded-xl hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 bg-lime-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-8 w-8 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="font-black text-neutral-900 uppercase tracking-wide text-sm mb-3">{item.title}</h3>
                    <p className="text-neutral-600 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section id="news" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-neutral-900 uppercase tracking-tighter mb-6">
                LATEST NEWS
              </h2>
              <div className="w-24 h-1 bg-lime-400 mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-neutral-600 font-medium max-w-3xl mx-auto leading-relaxed">
                Stay updated with our latest achievements and announcements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  date: "March 15, 2024",
                  title: "BSW TEAMS WIN REGIONAL CHAMPIONSHIP",
                  desc: "Our middle school and high school teams both secured first place in the regional tournament...",
                  image: "tournament championship celebration",
                },
                {
                  date: "March 8, 2024",
                  title: "NEW TRAINING FACILITY OPENS",
                  desc: "We're excited to announce the opening of our second training facility with two additional courts...",
                  image: "modern basketball training facility",
                },
                {
                  date: "February 28, 2024",
                  title: "SUMMER CAMP REGISTRATION OPEN",
                  desc: "Registration is now open for our intensive summer basketball camps. Early bird pricing available...",
                  image: "summer basketball camp kids",
                },
              ].map((news, index) => (
                <Card
                  key={index}
                  className="bg-neutral-50 border-0 rounded-xl overflow-hidden hover:shadow-xl transition-all hover:scale-105"
                >
                  <CardHeader className="p-0">
                    <div className="w-full h-48 relative">
                      <Image
                        src={`/placeholder.svg?height=200&width=300&query=${news.image}`}
                        alt={news.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="text-sm text-lime-400 font-bold uppercase tracking-wide mb-3">{news.date}</div>
                    <h3 className="text-xl font-black text-neutral-900 uppercase tracking-tight mb-4 leading-tight">
                      {news.title}
                    </h3>
                    <p className="text-neutral-600 font-medium leading-relaxed">{news.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="#"
                className="inline-flex items-center text-neutral-900 hover:text-lime-400 font-bold uppercase tracking-wide transition-colors"
              >
                View All News
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-24 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">GALLERY</h2>
              <div className="w-24 h-1 bg-lime-400 mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-neutral-300 font-medium max-w-3xl mx-auto leading-relaxed">
                Action shots from our training sessions and games
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="aspect-square relative overflow-hidden rounded-xl hover:scale-105 transition-transform cursor-pointer group"
                >
                  <Image
                    src={`/placeholder.svg?height=300&width=300&query=basketball action shot ${i}`}
                    alt={`Basketball action shot ${i}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-lime-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 font-bold uppercase tracking-wide px-8 py-4 rounded-lg transition-all bg-transparent"
              >
                View Full Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-neutral-900 uppercase tracking-tighter mb-6">
                TESTIMONIALS
              </h2>
              <div className="w-24 h-1 bg-lime-400 mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-neutral-600 font-medium max-w-3xl mx-auto leading-relaxed">
                Hear from families who have experienced our programs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "BSW Basketball has been incredible for my son's development. The coaches are patient, knowledgeable, and really care about each player's growth.",
                  name: "Sarah Johnson",
                  role: "Parent of Middle School Player",
                },
                {
                  quote:
                    "The facilities are top-notch and the training programs are well-structured. My daughter has improved tremendously in just one season.",
                  name: "Mike Rodriguez",
                  role: "Parent of High School Player",
                },
                {
                  quote:
                    "BSW Basketball doesn't just teach basketball skills - they teach life skills. The character development aspect is what sets them apart.",
                  name: "Lisa Chen",
                  role: "Parent of Elementary Player",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white border-0 rounded-xl p-8 hover:shadow-lg transition-all">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-lime-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-neutral-700 font-medium mb-8 leading-relaxed italic text-lg">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-neutral-200 rounded-full mr-4"></div>
                      <div>
                        <div className="font-black text-neutral-900 uppercase tracking-wide text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-neutral-600 font-medium text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-neutral-900 uppercase tracking-tighter mb-6">
                CONTACT US
              </h2>
              <div className="w-24 h-1 bg-lime-400 mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-neutral-600 font-medium max-w-3xl mx-auto leading-relaxed">
                Get in touch to learn more about our programs
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-black text-neutral-900 uppercase tracking-tight mb-8">GET IN TOUCH</h3>

                <div className="space-y-8 mb-12">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-lime-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-neutral-900" />
                    </div>
                    <div>
                      <h4 className="font-black text-neutral-900 uppercase tracking-wide text-sm mb-2">
                        TRAINING FACILITY
                      </h4>
                      <p className="text-neutral-600 font-medium leading-relaxed">
                        123 Sports Center Drive
                        <br />
                        Basketball City, BC 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-lime-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-neutral-900" />
                    </div>
                    <div>
                      <h4 className="font-black text-neutral-900 uppercase tracking-wide text-sm mb-2">PHONE</h4>
                      <p className="text-neutral-600 font-medium">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-lime-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-neutral-900" />
                    </div>
                    <div>
                      <h4 className="font-black text-neutral-900 uppercase tracking-wide text-sm mb-2">EMAIL</h4>
                      <p className="text-neutral-600 font-medium">info@bswbasketball.com</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-black text-neutral-900 uppercase tracking-wide text-sm mb-6">FOLLOW US</h4>
                  <div className="flex space-x-4">
                    {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center text-white hover:bg-lime-400 hover:text-neutral-900 transition-all hover:scale-105"
                      >
                        <Icon className="h-5 w-5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-neutral-900 uppercase tracking-tight mb-8">QUICK CONTACT</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-neutral-900 uppercase tracking-wide mb-3">
                        First Name
                      </label>
                      <Input
                        className="border-2 border-neutral-200 rounded-lg p-4 font-medium focus:border-lime-400 transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-neutral-900 uppercase tracking-wide mb-3">
                        Last Name
                      </label>
                      <Input
                        className="border-2 border-neutral-200 rounded-lg p-4 font-medium focus:border-lime-400 transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-neutral-900 uppercase tracking-wide mb-3">
                      Email
                    </label>
                    <Input
                      type="email"
                      className="border-2 border-neutral-200 rounded-lg p-4 font-medium focus:border-lime-400 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-neutral-900 uppercase tracking-wide mb-3">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      className="border-2 border-neutral-200 rounded-lg p-4 font-medium focus:border-lime-400 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-neutral-900 uppercase tracking-wide mb-3">
                      Message
                    </label>
                    <Textarea
                      className="border-2 border-neutral-200 rounded-lg p-4 font-medium focus:border-lime-400 transition-colors"
                      placeholder="Tell us about your interest in our programs..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full bg-lime-400 hover:bg-lime-500 text-neutral-900 font-bold uppercase tracking-wide py-4 rounded-lg transition-all hover:scale-105">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-lime-400 rounded-xl flex items-center justify-center">
                    <span className="text-neutral-900 font-black text-xl">BSW</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight">BSW Basketball</h3>
                  </div>
                </div>
                <p className="text-neutral-400 font-medium mb-8 leading-relaxed">
                  Developing champions on and off the court through expert coaching and character development.
                </p>
                <div className="flex space-x-4">
                  {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                    <Link key={index} href="#" className="text-neutral-400 hover:text-lime-400 transition-colors">
                      <Icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-black uppercase tracking-wide text-sm mb-6">QUICK LINKS</h4>
                <ul className="space-y-3">
                  {["Home", "About", "Programs", "Gallery", "News"].map((link) => (
                    <li key={link}>
                      <Link
                        href={`#${link.toLowerCase()}`}
                        className="text-neutral-400 hover:text-lime-400 font-medium transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-black uppercase tracking-wide text-sm mb-6">PROGRAMS</h4>
                <ul className="space-y-3">
                  {[
                    "Elementary (Ages 6-10)",
                    "Middle School (Ages 11-14)",
                    "High School (Ages 15-18)",
                    "Summer Camps",
                    "Private Training",
                  ].map((program) => (
                    <li key={program}>
                      <Link href="#" className="text-neutral-400 hover:text-lime-400 font-medium transition-colors">
                        {program}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-black uppercase tracking-wide text-sm mb-6">CONTACT INFO</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-lime-400 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-400 font-medium">
                      123 Sports Center Drive
                      <br />
                      Basketball City, BC 12345
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-lime-400" />
                    <span className="text-neutral-400 font-medium">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-lime-400" />
                    <span className="text-neutral-400 font-medium">info@bswbasketball.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-800 pt-8 text-center">
              <p className="text-neutral-400 font-medium">
                © {new Date().getFullYear()} BSW Basketball Club. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
