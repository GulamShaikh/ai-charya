import Link from 'next/link';
import { useState } from 'react';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      name: "Free",
      description: "Perfect for trying out AI-Charya",
      price: { monthly: 0, yearly: 0 },
      features: [
        "Up to 3 students",
        "5 learning sessions per month",
        "Basic templates",
        "Community support",
        "Basic analytics",
        "Mobile app access"
      ],
      limitations: [
        "Limited customization",
        "Watermarked content"
      ],
      buttonText: "Get Started Free",
      buttonStyle: "border border-gray-600 hover:border-cyan-400",
      popular: false
    },
    {
      name: "Educator",
      description: "For individual teachers and small classrooms",
      price: { monthly: 19, yearly: 190 },
      features: [
        "Up to 30 students",
        "Unlimited learning sessions",
        "All templates & games",
        "Priority support",
        "Advanced analytics",
        "Custom branding",
        "Assessment tools",
        "Progress tracking",
        "Parent reports"
      ],
      limitations: [],
      buttonText: "Start Free Trial",
      buttonStyle: "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700",
      popular: true
    },
    {
      name: "School",
      description: "For schools and larger institutions",
      price: { monthly: 49, yearly: 490 },
      features: [
        "Unlimited students",
        "Unlimited sessions",
        "All premium features",
        "Dedicated support",
        "Advanced analytics",
        "Custom integrations",
        "Admin dashboard",
        "Bulk user management",
        "API access",
        "LMS integration",
        "White-label options"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      buttonStyle: "bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700",
      popular: false
    }
  ];

  const features = [
    {
      category: "Core Features",
      items: [
        { name: "Adaptive Learning Engine", free: true, educator: true, school: true },
        { name: "Gamification Tools", free: "Basic", educator: true, school: true },
        { name: "Interactive Templates", free: "5", educator: "All", school: "All" },
        { name: "Real-time Analytics", free: "Basic", educator: true, school: true },
        { name: "Mobile App", free: true, educator: true, school: true }
      ]
    },
    {
      category: "Advanced Features",
      items: [
        { name: "Custom Branding", free: false, educator: true, school: true },
        { name: "API Access", free: false, educator: false, school: true },
        { name: "LMS Integration", free: false, educator: "Limited", school: true },
        { name: "White-label Options", free: false, educator: false, school: true },
        { name: "Priority Support", free: false, educator: true, school: true }
      ]
    },
    {
      category: "Usage Limits",
      items: [
        { name: "Students", free: "3", educator: "30", school: "Unlimited" },
        { name: "Sessions per Month", free: "5", educator: "Unlimited", school: "Unlimited" },
        { name: "Storage", free: "100MB", educator: "1GB", school: "10GB" },
        { name: "Admin Users", free: "1", educator: "1", school: "Unlimited" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/landing" className="flex items-center space-x-2">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3048/3048425.png" 
                alt="AI-Charya" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                AI-Charya
              </span>
            </Link>
            <div className="flex space-x-6">
              <Link href="/landing" className="hover:text-cyan-400 transition-colors">Home</Link>
              <Link href="/features" className="hover:text-cyan-400 transition-colors">Features</Link>
              <Link href="/pricing" className="text-cyan-400">Pricing</Link>
              <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
              <Link href="/login" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-lg">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-500/20 via-purple-600/20 to-pink-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Simple Pricing
            </span>
            <br />
            <span className="text-white">for Every Educator</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs. Start free and upgrade as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-cyan-500 transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${billingPeriod === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly 
              <span className="ml-1 text-green-400 text-sm font-medium">(-20%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-gray-800 rounded-lg p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500 ring-2 ring-cyan-500 ring-opacity-50' 
                    : 'border-gray-700'
                } transition-all duration-300 hover:border-cyan-400`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold mb-2">
                    ${plan.price[billingPeriod]}
                    <span className="text-lg text-gray-400 font-normal">
                      /{billingPeriod === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingPeriod === 'yearly' && plan.price.yearly > 0 && (
                    <p className="text-green-400 text-sm">
                      Save ${(plan.price.monthly * 12) - plan.price.yearly} per year
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <svg className="w-5 h-5 text-gray-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compare All Features
            </h2>
            <p className="text-xl text-gray-400">
              See what's included in each plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-6 py-4 text-left">Features</th>
                  <th className="px-6 py-4 text-center">Free</th>
                  <th className="px-6 py-4 text-center">Educator</th>
                  <th className="px-6 py-4 text-center">School</th>
                </tr>
              </thead>
              <tbody>
                {features.map((category, categoryIndex) => (
                  <>
                    <tr key={`category-${categoryIndex}`} className="bg-gray-800">
                      <td colSpan={4} className="px-6 py-3 font-semibold text-cyan-400">
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr key={`${categoryIndex}-${itemIndex}`} className="border-t border-gray-700">
                        <td className="px-6 py-4">{item.name}</td>
                        <td className="px-6 py-4 text-center">
                          {typeof item.free === 'boolean' ? (
                            item.free ? (
                              <svg className="w-5 h-5 text-green-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 text-gray-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            )
                          ) : (
                            <span className="text-gray-300">{item.free}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {typeof item.educator === 'boolean' ? (
                            item.educator ? (
                              <svg className="w-5 h-5 text-green-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 text-gray-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            )
                          ) : (
                            <span className="text-gray-300">{item.educator}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {typeof item.school === 'boolean' ? (
                            item.school ? (
                              <svg className="w-5 h-5 text-green-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 text-gray-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            )
                          ) : (
                            <span className="text-gray-300">{item.school}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Can I switch plans at any time?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
              },
              {
                q: "Is there a free trial for paid plans?",
                a: "Yes, all paid plans come with a 14-day free trial. No credit card required to start your trial."
              },
              {
                q: "What happens to my data if I cancel?",
                a: "Your data remains accessible for 30 days after cancellation. You can export all your content and student data during this period."
              },
              {
                q: "Do you offer educational discounts?",
                a: "Yes, we offer special pricing for educational institutions. Contact our sales team for more information about bulk pricing and educational discounts."
              },
              {
                q: "Can I integrate AI-Charya with my existing LMS?",
                a: "Yes, our School plan includes LMS integration support for popular platforms like Google Classroom, Canvas, and Moodle."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Classroom?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of educators who are already using AI-Charya to create engaging learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/contact" 
              className="border border-gray-600 hover:border-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-gray-800"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
