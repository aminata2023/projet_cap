import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <Image
          src="/images/accueil1.jpg"
          alt="Church building ..."
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Our Church</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Learn about our history, mission, and the people who make our community special
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Grace Community Church was founded in 1985 by a small group of families who shared a vision for a
                  church that would be welcoming to all and deeply rooted in scripture.
                </p>
                <p>
                  What began as a small gathering in a living room has grown into a vibrant community of believers
                  dedicated to serving God and our neighbors. Through the years, we've been blessed to see countless
                  lives transformed by God's grace.
                </p>
                <p>
                  In 2005, we moved to our current location, which has allowed us to expand our ministries and better
                  serve the community. Throughout our growth, we've remained committed to our founding principles of
                  authentic worship, biblical teaching, and compassionate outreach.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/accueil1.jpg?=800&width=600" alt="Church history" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are guided by a clear mission and core values that shape everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To glorify God by making disciples who love God, grow in community, and serve the world.
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
                  <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be a church where people of all backgrounds can encounter God's love and be equipped to make a
                    difference in their communities.
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
                  <h3 className="text-xl font-bold mb-2">Our Values</h3>
                  <p className="text-gray-600">
                    Biblical teaching, authentic worship, meaningful community, compassionate service, and intentional
                    discipleship.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated individuals who guide our church community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Pastor John Smith",
                role: "Lead Pastor",
                bio: "Pastor John has served our church for over 15 years. He has a passion for teaching God's Word and helping people grow in their faith.",
              },
              {
                name: "Sarah Johnson",
                role: "Worship Pastor",
                bio: "Sarah leads our worship ministry with creativity and a deep love for God. She has been part of our church family since 2010.",
              },
              {
                name: "Michael Brown",
                role: "Youth Pastor",
                bio: "Michael brings energy and wisdom to our youth ministry. He is dedicated to helping young people build a strong foundation in Christ.",
              },
              {
                name: "David Wilson",
                role: "Elder",
                bio: "David has served as an elder for 8 years. His wisdom and discernment have been invaluable to our church leadership.",
              },
              {
                name: "Rebecca Martinez",
                role: "Children's Ministry Director",
                bio: "Rebecca has a heart for children and families. She creates engaging programs that help children learn about God's love.",
              },
              {
                name: "James Thompson",
                role: "Outreach Coordinator",
                bio: "James coordinates our community service initiatives. He is passionate about showing God's love through practical service.",
              },
            ].map((leader, i) => (
              <Card key={i} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=96&width=96&text=Leader${i + 1}`}
                        alt={leader.name}
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{leader.name}</h3>
                    <p className="text-sky-600 mb-2">{leader.role}</p>
                    <p className="text-gray-600">{leader.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Beliefs</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                At Grace Community Church, we believe in the authority of Scripture and the centrality of the gospel
                message. Our core beliefs include:
              </p>
              <ul className="space-y-2 mt-4">
                <li>The Bible is the inspired and infallible Word of God.</li>
                <li>There is one God, eternally existing in three persons: Father, Son, and Holy Spirit.</li>
                <li>Jesus Christ is fully God and fully man, born of a virgin, and lived a sinless life.</li>
                <li>Salvation is by grace through faith in Jesus Christ alone.</li>
                <li>The church is the body of Christ, called to worship, fellowship, and service.</li>
                <li>Jesus Christ will return personally and visibly to judge the living and the dead.</li>
              </ul>
              <p className="mt-4">
                These beliefs guide our teaching, worship, and ministry as we seek to honor God and serve our community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

