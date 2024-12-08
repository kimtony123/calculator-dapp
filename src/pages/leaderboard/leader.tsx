import React from "react";
import PublisherImage from "../../assets/publisher.webp";
import SubscriberImage from "../../assets/subscriber.webp";
import CalculatorArchitectureImage from "../../assets/ao-robo final.png"; // Assuming the uploaded image is saved here

const LeaderboardPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">
        Calculator DApp Architecture
      </h1>
      <div className="text-lg leading-relaxed">
        <p className="mb-4">
          The Calculator DApp demonstrates how to use{" "}
          <strong>ao-robotics</strong> to bridge between{" "}
          <strong>ao-computer</strong> and <strong>ROS2</strong>. This simple
          application adds two numbers and consists of three major components:
        </p>

        <h2 className="text-2xl font-semibold mb-2">1.Aocomputer</h2>
        <p className="mb-4">
          <strong>Aocomputer</strong> serves as the platform for building IoT
          and robotics applications, such as smart homes. It also provides
          essential identity and interaction tools.
          <strong>Aocomputer</strong> also stores data logs of all these
          interactions permanently, preventing issues like mass surveillance
          within your home.
        </p>

        <h2 className="text-2xl font-semibold mb-2">2. ao-python interface.</h2>
        <p className="mb-4">
          <strong></strong> allows python apps and softwares to interact with
          aocomputer. It is used by ao-robotics to enable processes on
          ao-computer to interact with ROS2 nodes.
        </p>

        <h2 className="text-2xl font-semibold mb-2">3. Ao-Robotics</h2>
        <p className="mb-4">
          This component bridges interactions between{" "}
          <strong>ao-computer</strong> and <strong>ROS2</strong>. It has two
          main parts:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Morpheus</strong>: Acts as the interface between aocomputer
            and ROS2. It transforms messages on ao into executable values on
            ROS2.
          </li>
          <li>
            <strong>The Architect</strong>: Handles nodes in ROS2, abstracting
            the execution of various processes and packages. This allows
            multiple ao processes to interact with multiple ROS2 nodes.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">3. ROS2</h2>
        <p className="mb-4">
          ROS2 contains the robotics and IoT packages used by ao processes to
          perform computations, such as computer vision and other complex tasks.
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          How the Calculator DApp Works
        </h2>
        <p className="mb-4">
          ROS2 has a service called <strong>sum_two_ints</strong>, which
          computes the sum of two given numbers. The following steps outline how
          the app works:
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li>
            The user sends two values, e.g., a=1, b=2, using the Calculator
            DApp.
          </li>
          <li>
            The DApp, built on top of aocomputer, the ao-python interface takes
            these inputs and sends them to Morpheus, awaiting a response.
          </li>
          <li>
            Morpheus transforms the inputs into a format executable by ROS2.
          </li>
          <li>Morpheus sends the inputs to The Architect.</li>
          <li>
            The Architect passes the inputs to the <strong>sum_two_ints</strong>{" "}
            service, which performs the computation.
          </li>
          <li>The service returns the results to The Architect.</li>
          <li>The Architect sends the results to Morpheus.</li>
          <li>
            Morpheus sends the results to the ao-python interface and logs the
            compute data.
          </li>
          <li>The results and logs are sent to the DApp.</li>
          <li>The user views the results on the DApp.</li>
        </ol>

        <div className="relative my-6">
          <img
            src={CalculatorArchitectureImage}
            alt="Calculator DApp Architecture"
            className="w-full rounded-lg hover:scale-105 transform transition duration-300 shadow-lg shadow-cyan-500/50"
          />
        </div>

        <div className="bg-black p-4 rounded-lg mt-8 shadow-lg">
          <h2 className="text-white text-lg font-bold mb-4">
            Acknowledgement.
          </h2>
          <p className="text-white text-md leading-relaxed">
            A huge thank you to <strong>Ivan Berman</strong>, the creator of the
            first bridge connecting <strong>Robonomics Parachain</strong> on
            Polkadot and <strong>ROS2</strong>. This architecture design was
            heavily inspired by his open-source project. His incredible work has
            paved the way for projects like this one.
          </p>
          <p className="mt-2">
            You can follow Ivan on Twitter:
            <a
              href="https://twitter.com/berman_ivan"
              className="text-blue-400 underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @berman_ivan
            </a>
            , or reach out to him via email at
            <a
              href="mailto:fingerling42@proton.me"
              className="text-blue-400 underline ml-1"
            >
              fingerling42@proton.me
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
