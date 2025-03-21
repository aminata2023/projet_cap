import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CreditCard, Building, Calendar, Heart, Globe, Users, BookOpen, Baby, CheckCircle } from "lucide-react"

export default function GivePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Giving"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Giving & Stewardship</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">Supporting the mission and ministries of our church</p>
        </div>
      </section>

      {/* Giving Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why We Give</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Grace Community Church, we believe that giving is an act of worship and an expression of gratitude for
              God's generosity to us. Your faithful giving supports our mission to share the love of Christ with our
              community and world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Worship</h3>
                  <p className="text-gray-600">
                    Giving is an act of worship that expresses our love for God and acknowledges that everything we have
                    comes from Him.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Community</h3>
                  <p className="text-gray-600">
                    Your giving supports our church family and creates opportunities for fellowship, discipleship, and
                    care.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mission</h3>
                  <p className="text-gray-600">
                    Through your generosity, we can reach beyond our walls to share Christ's love locally and globally.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Online Giving */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Give Online</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Online giving is a safe, easy way to support the ministries of Grace Community Church. You can give a
                  one-time gift or schedule recurring donations.
                </p>
                <p>Benefits of online giving:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Simple and convenient</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Secure transactions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Schedule recurring gifts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Track your giving history</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Give from anywhere</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Automatic tax receipts</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-6 text-center">Make a Donation</h3>
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                      Donation Amount
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <Input
                        type="number"
                        name="amount"
                        id="amount"
                        className="pl-7"
                        placeholder="0.00"
                        min="1"
                        step="1"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="fund" className="block text-sm font-medium text-gray-700 mb-1">
                      Select Fund
                    </label>
                    <select
                      id="fund"
                      name="fund"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md"
                    >
                      <option>General Fund</option>
                      <option>Missions Fund</option>
                      <option>Building Fund</option>
                      <option>Benevolence Fund</option>
                      <option>Youth Ministry</option>
                      <option>Children's Ministry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">
                      Frequency
                    </label>
                    <select
                      id="frequency"
                      name="frequency"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md"
                    >
                      <option>One-time Gift</option>
                      <option>Weekly</option>
                      <option>Bi-weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full" size="lg">
                    Continue to Payment
                  </Button>
                </div>

                <div className="flex items-center justify-center space-x-4 pt-2">
                  <CreditCard className="h-6 w-6 text-gray-400" />
                  <Building className="h-6 w-6 text-gray-400" />
                  <svg className="h-6 w-10 text-gray-400" viewBox="0 0 60 40" fill="currentColor">
                    <path d="M60 16.634v-3.39H53.538v-1.515l6.115-7.265h3.943v7.265h1.942v1.515h-1.942v3.39H60zm-3.538-3.39h2.4v-4.275l-2.4 4.275zM45.346 16.95c-4.38 0-7.624-3.315-7.624-8.265 0-4.95 3.245-8.265 7.624-8.265 4.38 0 7.624 3.315 7.624 8.265s-3.245 8.265-7.624 8.265zm0-1.59c3.245 0 5.538-2.595 5.538-6.675s-2.293-6.675-5.538-6.675c-3.244 0-5.538 2.595-5.538 6.675s2.294 6.675 5.538 6.675zM30.19 16.95c-4.38 0-7.624-3.315-7.624-8.265 0-4.95 3.245-8.265 7.624-8.265 4.38 0 7.624 3.315 7.624 8.265s-3.244 8.265-7.624 8.265zm0-1.59c3.245 0 5.539-2.595 5.539-6.675s-2.294-6.675-5.539-6.675c-3.244 0-5.538 2.595-5.538 6.675s2.294 6.675 5.538 6.675zM19.637 16.634v-1.515l6.115-7.265c1.212-1.44 1.732-2.385 1.732-3.54 0-1.665-1.212-2.79-3.174-2.79-1.803 0-3.174 1.05-3.174 2.595 0 .225.07.45.07.675h-2.085c0-.225-.07-.525-.07-.75C19.051 1.59 21.204 0 24.378 0c3.245 0 5.398 1.74 5.398 4.455 0 1.59-.52 2.79-2.013 4.53l-4.948 5.85h7.03v1.8h-10.208zM8.79 16.95c-4.38 0-7.624-3.315-7.624-8.265C1.166 3.735 4.41.42 8.79.42c4.38 0 7.624 3.315 7.624 8.265s-3.244 8.265-7.624 8.265zm0-1.59c3.245 0 5.539-2.595 5.539-6.675S12.035 2.01 8.79 2.01c-3.244 0-5.538 2.595-5.538 6.675s2.294 6.675 5.538 6.675z" />
                    <path d="M53.538 40v-3.39h-6.462v-1.515l6.115-7.265h3.943v7.265h1.942v1.515h-1.942v3.39H53.538zm-3.538-3.39h2.4v-4.275l-2.4 4.275z" />
                  </svg>
                </div>

                <div className="text-center text-xs text-gray-500">
                  Your donation is secure and encrypted. You will receive a tax receipt by email.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Give</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In addition to online giving, we offer several other convenient ways to support our church
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <Building className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">In Person</h3>
                  <p className="text-gray-600">
                    Place your gift in the offering during Sunday services or drop it off at the church office during
                    business hours.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <Calendar className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">By Mail</h3>
                  <p className="text-gray-600">
                    Send your check to: Grace Community Church, 123 Faith Avenue, Cityville, ST 12345. Please include
                    your name and designation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <CreditCard className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Text to Give</h3>
                  <p className="text-gray-600">
                    Text "GIVE" followed by the amount to (555) 123-4567. First-time givers will receive a link to
                    complete registration.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ministry Impact */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Giving Makes a Difference</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how your generosity is transforming lives in our church and community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Worship & Discipleship</h3>
                  <p className="text-gray-600">
                    Supporting weekly worship services, Bible studies, and discipleship programs that help people grow
                    in their faith.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <Baby className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Children & Youth</h3>
                  <p className="text-gray-600">
                    Investing in the next generation through age-appropriate programs, events, and mentoring
                    relationships.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Compassion & Care</h3>
                  <p className="text-gray-600">
                    Providing assistance to those in need through our food pantry, benevolence fund, and support groups.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Missions & Outreach</h3>
                  <p className="text-gray-600">
                    Supporting local and global mission partners who are sharing Christ's love around the world.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/annual-report">View Annual Report</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Planned Giving */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Legacy+Giving"
                alt="Legacy Giving"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Legacy Giving</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Legacy giving allows you to make a lasting impact on the ministry of Grace Community Church for
                  generations to come.
                </p>
                <p>Ways to include the church in your estate planning:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Bequest in your will or trust</li>
                  <li>Beneficiary designation on retirement accounts or life insurance</li>
                  <li>Charitable gift annuities</li>
                  <li>Donor-advised funds</li>
                  <li>Appreciated assets such as stocks or real estate</li>
                </ul>
                <p>
                  Our Legacy Giving team can help you explore options that align with your financial and charitable
                  goals.
                </p>
                <div className="pt-4 flex gap-4">
                  <Button asChild>
                    <Link href="/legacy-giving">Learn More</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact?subject=Legacy%20Giving">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Stewardship */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Stewardship</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to being good stewards of the resources God has entrusted to us
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Financial Accountability</h3>
                    <p className="text-gray-600">
                      Grace Community Church is committed to financial transparency and accountability. Our financial
                      statements are reviewed by an independent accounting firm, and our budget is approved by the
                      church leadership team.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">Annual Budget</h3>
                    <p className="text-gray-600">
                      Our annual budget is developed through a prayerful process that involves ministry leaders and
                      church leadership. The budget reflects our mission priorities and ministry goals for the year.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">Financial Reports</h3>
                    <p className="text-gray-600">
                      Quarterly financial reports are available to church members, providing updates on giving,
                      expenses, and ministry impact. These reports help ensure transparency and accountability in our
                      financial stewardship.
                    </p>
                  </div>

                  <div className="flex justify-center pt-4">
                    <Button asChild>
                      <Link href="/financial-reports">View Financial Reports</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about giving at Grace Community Church
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Is my donation tax-deductible?</h3>
                <p className="text-gray-600">
                  Yes, Grace Community Church is a 501(c)(3) nonprofit organization, and all donations are
                  tax-deductible to the extent allowed by law. You will receive a year-end giving statement for your tax
                  records.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">How can I get a copy of my giving statement?</h3>
                <p className="text-gray-600">
                  Giving statements are emailed annually in January. You can also access your giving history anytime
                  through our online giving portal or by contacting the church office.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Can I designate my gift to a specific ministry?</h3>
                <p className="text-gray-600">
                  Yes, you can designate your gift to a specific fund or ministry. However, we encourage unrestricted
                  giving to our General Fund, which supports the overall mission and ministries of the church.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Is online giving secure?</h3>
                <p className="text-gray-600">
                  Yes, our online giving platform uses industry-standard encryption and security protocols to protect
                  your personal and financial information. We do not store your credit card or bank account information
                  on our servers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">How do I cancel or modify my recurring gift?</h3>
                <p className="text-gray-600">
                  You can cancel or modify your recurring gift at any time by logging into your account on our online
                  giving platform or by contacting the church office for assistance.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Have additional questions about giving?</p>
            <Button asChild>
              <Link href="/contact?subject=Giving%20Question">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

