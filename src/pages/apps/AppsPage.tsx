import React from "react";

const AppsPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-8 px-6">
      <div className="max-w-screen-lg mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-cyan-400">
            AO Computer and ROS2
          </h1>
          <p className="text-gray-300 mt-4 text-lg">
            unlocking IOT and robotics on ao computer.
          </p>
        </header>

        {/* Description Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-400">
            What is AO Computer?
          </h2>
          <p className="text-gray-300 mt-4">
            AO computer is a decentralized compute enviroment Built on top of
            Arweave blockchain.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-400">What is ROS2?</h2>
          <p className="text-gray-300 mt-4">
            ROS2 (Robot Operating System 2) is a flexible framework for writing
            robot software. It enhances communication between robotic components
            using a publish-subscribe architecture, enabling efficient,
            real-time, and reliable interactions in robotics applications.
          </p>
        </section>

        {/* Similarities Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-400">
            Similarities Between AO Computer and ROS2
          </h2>
          <table className="w-full mt-6 border-collapse border border-gray-700 text-gray-300">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-700 p-2">Aspect</th>
                <th className="border border-gray-700 p-2">AO Computer</th>
                <th className="border border-gray-700 p-2">ROS2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 p-2">Architecture</td>
                <td className="border border-gray-700 p-2">
                  Decentralized computing nodes
                </td>
                <td className="border border-gray-700 p-2">
                  Distributed robotic nodes
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  Communication Model
                </td>
                <td className="border border-gray-700 p-2">
                  Peer-to-peer messaging
                </td>
                <td className="border border-gray-700 p-2">
                  Publish-subscribe messaging
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">Scalability</td>
                <td className="border border-gray-700 p-2">Highly scalable</td>
                <td className="border border-gray-700 p-2">Highly scalable</td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">Fault Tolerance</td>
                <td className="border border-gray-700 p-2">Redundant nodes</td>
                <td className="border border-gray-700 p-2">
                  Multiple QoS policies
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  Real-Time Processing
                </td>
                <td className="border border-gray-700 p-2">
                  Supports real-time execution
                </td>
                <td className="border border-gray-700 p-2">
                  Real-time capabilities
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">Modularity</td>
                <td className="border border-gray-700 p-2">
                  Smart contract-based
                </td>
                <td className="border border-gray-700 p-2">Component-based</td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">Ecosystem</td>
                <td className="border border-gray-700 p-2">Blockchain-based</td>
                <td className="border border-gray-700 p-2">
                  Open-source framework
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">Interoperability</td>
                <td className="border border-gray-700 p-2">
                  Multi-chain compatibility
                </td>
                <td className="border border-gray-700 p-2">
                  Cross-platform support
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">Security</td>
                <td className="border border-gray-700 p-2">
                  Cryptographic guarantees
                </td>
                <td className="border border-gray-700 p-2">
                  Secure data handling
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">Data Flow</td>
                <td className="border border-gray-700 p-2">Message passing.</td>
                <td className="border border-gray-700 p-2">
                  Message-based topics
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Importance of Bridging Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-400">
            Why Bridging AO Computer and ROS2 Matters
          </h2>
          <table className="w-full mt-6 border-collapse border border-gray-700 text-gray-300">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-700 p-2">Reason</th>
                <th className="border border-gray-700 p-2">
                  Impact on AO Ecosystem
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 p-2">
                  Decentralized Robotics
                </td>
                <td className="border border-gray-700 p-2">
                  Combines robotics with decentralized technologies.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">Scalability</td>
                <td className="border border-gray-700 p-2">
                  Enables larger robotics networks.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">Interoperability</td>
                <td className="border border-gray-700 p-2">
                  Connects blockchain with robotic frameworks.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  Real-Time Processing
                </td>
                <td className="border border-gray-700 p-2">
                  Improves efficiency in robotics tasks.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  Ecosystem Expansion
                </td>
                <td className="border border-gray-700 p-2">
                  Attracts developers from both domains.
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Publisher-Subscriber Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-400">
            Importance of ao computer Calculator Dapp.
          </h2>
          <table className="w-full mt-6 border-collapse border border-gray-700 text-gray-300">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-700 p-2">Aspect</th>
                <th className="border border-gray-700 p-2">
                  Role in Introduction
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 p-2">
                  Ease of Understanding
                </td>
                <td className="border border-gray-700 p-2">
                  Simple concept for beginners.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  Core Architecture
                </td>
                <td className="border border-gray-700 p-2">
                  Demonstrates key communication patterns.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">Scalability</td>
                <td className="border border-gray-700 p-2">
                  Shows how nodes can expand in number.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  Cross-Domain Applications
                </td>
                <td className="border border-gray-700 p-2">
                  Links Ros2 and aocomputer seamlessly.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default AppsPage;
