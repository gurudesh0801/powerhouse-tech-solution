"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronRight, FiCheckCircle } from "react-icons/fi";

const services = [
  {
    title: "Web Development",
    description:
      "Build modern, responsive websites that engage users and drive conversions.",
    icon: "🌐",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    benefits: [
      "Lightning-fast performance",
      "SEO optimized",
      "Mobile-first design",
      "Scalable architecture",
    ],
  },
  {
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    icon: "📱",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    benefits: [
      "Smooth animations",
      "Offline capabilities",
      "Push notifications",
      "Secure authentication",
    ],
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure tailored to your business requirements.",
    icon: "☁️",
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    benefits: [
      "99.9% uptime",
      "Auto-scaling",
      "Cost optimization",
      "Disaster recovery",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that delight users and boost engagement.",
    icon: "🎨",
    technologies: ["Figma", "Adobe XD", "Sketch", "Framer", "Webflow"],
    benefits: [
      "User research",
      "Wireframing",
      "Prototyping",
      "Usability testing",
    ],
  },
  {
    title: "DevOps",
    description:
      "Streamline your development workflow with CI/CD pipelines and automation.",
    icon: "⚙️",
    technologies: [
      "GitHub Actions",
      "Jenkins",
      "Terraform",
      "Ansible",
      "Prometheus",
    ],
    benefits: [
      "Faster deployments",
      "Automated testing",
      "Infrastructure as code",
      "Monitoring & alerts",
    ],
  },
  {
    title: "AI-Powered Solutions",
    description:
      "Transform your business with cutting-edge artificial intelligence tailored to your needs.",
    icon: "🤖",
    technologies: ["TensorFlow", "PyTorch", "Python", "NLP", "Computer Vision"],
    benefits: [
      "Automate repetitive tasks",
      "Gain data-driven insights",
      "Enhance customer experiences",
      "Predict market trends",
    ],
  },
];

const faqs = [
  {
    question: "What's your development process?",
    answer:
      "We follow an agile methodology with 2-week sprints, daily standups, and continuous feedback loops.",
  },
  {
    question: "How do you ensure code quality?",
    answer:
      "All code goes through peer review, automated testing, and QA processes before deployment.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Absolutely! We seamlessly integrate with in-house teams through pair programming and knowledge sharing.",
  },
];

type Service = {
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  benefits: string[];
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="bg-[#f9f7f5]">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100 rounded-full blur-[80px] opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-[100px] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full mb-6"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
            </span>
            Our Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            <span className="relative inline-block">
              <span className="relative z-10">Solutions</span>
              <span className="absolute left-0 bottom-2 w-full h-3 bg-amber-200/70 -z-0"></span>
            </span>{" "}
            <span className="text-amber-600">Tailored</span> For Your Success
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We deliver cutting-edge technology services that drive growth,
            efficiency, and competitive advantage.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="p-8 flex-1">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="flex items-center text-amber-600 font-medium">
                      Learn more{" "}
                      <FiChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <div className="bg-amber-50 px-8 py-4 border-t border-amber-100">
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium bg-white px-3 py-1 rounded-full border border-amber-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {service.technologies.length > 3 && (
                        <span className="text-xs font-medium bg-white px-3 py-1 rounded-full border border-amber-200">
                          +{service.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 -bottom-2 -right-2 w-full h-full rounded-xl bg-amber-100 group-hover:bg-amber-200 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-amber-600">Approach</span> To{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Success</span>
                <span className="absolute left-0 bottom-2 w-full h-3 bg-amber-200/70 -z-0"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers exceptional results through
              every phase of development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#f9f7f5] p-8 rounded-xl border border-amber-100"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Discovery
              </h3>
              <p className="text-gray-600">
                We dive deep to understand your business goals, challenges, and
                technical requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#f9f7f5] p-8 rounded-xl border border-amber-100"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Development
              </h3>
              <p className="text-gray-600">
                Agile sprints with continuous delivery and regular progress
                demos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#f9f7f5] p-8 rounded-xl border border-amber-100"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Deployment
              </h3>
              <p className="text-gray-600">
                Smooth launch with comprehensive documentation and training.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why <span className="text-amber-600">Choose</span>{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Us</span>
                  <span className="absolute left-0 bottom-2 w-full h-3 bg-amber-200/70 -z-0"></span>
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                We're not just another development agency. Here's what sets us
                apart:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Domain Experts:</strong> Deep industry knowledge
                    across multiple sectors
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Cutting-Edge Tech:</strong> Always using the latest
                    proven technologies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Transparent Process:</strong> Regular updates and
                    open communication
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Scalable Solutions:</strong> Built to grow with your
                    business
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 bg-white p-1 rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095"
                  alt="Team working"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-yellow-100 rounded-xl shadow-lg border border-yellow-200/50 transform -rotate-3 z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Questions</span>
                <span className="absolute left-0 bottom-2 w-full h-3 bg-amber-200/70 -z-0"></span>
              </span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f9f7f5] p-6 rounded-xl border border-amber-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
                onClick={() => setSelectedService(null)}
              >
                <FiX size={20} />
              </button>

              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{selectedService.icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {selectedService.title}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {selectedService.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      Technologies We Use
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedService.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      Key Benefits
                    </h4>
                    <ul className="space-y-3">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FiCheckCircle className="text-amber-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button className="w-full py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors">
                    Get This Service
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
