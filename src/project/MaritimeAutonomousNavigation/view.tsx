
import diagram from './images/diagram.png';
import perception from './images/perception.png';
import navigation from './images/navigation.png';

import demoVideo from './videos/demo.mp4';

export default function view() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: 24 }}>
      <a href="/">← Back</a>

      <h1>Real-Time Multimodal Maritime Autonomy System</h1>

      <p style={{ fontStyle: 'italic', color: '#555' }}>
        Trust-based sensor fusion and autonomous scene understanding
        for dynamic maritime environments
      </p>

      {/* HERO VIDEO */}
      <video
        width="100%"
        controls
        autoPlay
        muted
        loop
        playsInline
        style={{
          marginTop: 24,
          borderRadius: 12,
          border: '1px solid #464141',
        }}
      >
        <source src={demoVideo} type="video/mp4" />
      </video>

      <p style={{ marginTop: 12, color: '#555', lineHeight: 1.7 }}>
        Real-world deployment footage showing onboard multimodal perception,
        dynamic obstacle awareness, and real-time vessel operation under
        challenging maritime conditions including glare, wave motion,
        and unstable sensor observations.
      </p>

      <p
        style={{
          marginTop: 12,
          padding: 12,
          background: '#f5f5f5',
          borderRadius: 8,
          color: '#555',
          lineHeight: 1.6,
        }}
      >
        Due to NDA restrictions, portions of the perception stack,
        sensor calibration pipeline, fusion logic, autonomous
        control system, and demo video are intentionally simplified or omitted.
      </p>

      {/* SYSTEM DIAGRAM */}
      <h3 style={{ marginTop: 48 }}>System Architecture</h3>

      <img
        src={diagram}
        alt="Real-Time Multimodal Maritime Autonomy System"
        width={900}
        style={{
          marginTop: 16,
          borderRadius: 12,
          border: '1px solid #ddd',
        }}
      />

      <p style={{ marginTop: 24, lineHeight: 1.7 }}>
        Developed a real-time closed-loop maritime autonomy system operating
        under noisy and highly dynamic ocean environments. The system integrated
        vision, radar, AIS, GPS, and vessel telemetry into a trust-based
        sensor fusion architecture for robust perception, temporal tracking,
        and navigation-aware scene understanding.
      </p>

      <p style={{ lineHeight: 1.7 }}>
        The primary challenge was maintaining stable perception and reliable
        state estimation under real-world uncertainty including glare,
        reflections, wave-induced vessel motion,
        latency constraints, and rapidly changing environmental conditions.
      </p>

      {/* CONTRIBUTIONS */}
      <h3 style={{ marginTop: 40 }}>Key Contributions</h3>

      <ul style={{ lineHeight: 1.9 }}>
        <li>
          Designed a trust-based sensor fusion pipeline that dynamically adjusted
          sensor confidence depending on object type and environmental conditions
        </li>

        <li>
          Implemented Kalman filter-based temporal tracking and noise filtering
          for robust perception under unstable maritime sensing conditions
        </li>

        <li>
          Built real-time multimodal perception pipelines for dynamic obstacle
          awareness and navigation-aware scene understanding
        </li>

        <li>
          Collaborated closely with planning and control engineers to provide
          reliable state estimation inputs for closed-loop vessel autonomy
        </li>

        <li>
          Optimized low-latency edge deployment using Raspberry Pi-based sensor
          processing and local GPU inference due to operational latency constraints
        </li>

        <li>
          Collected and processed real-world maritime datasets across varying
          weather and sea-state conditions to improve robustness in dynamic environments
        </li>

        <li>
          Designed deployment-oriented fallback and recovery strategies to
          maintain operational reliability during live demonstrations and sea trials
        </li>
      </ul>

      {/* PERCEPTION */}
      <h3 style={{ marginTop: 48 }}>Real-Time Onboard Perception</h3>

      <img
        src={perception}
        alt="Real-Time Maritime Perception"
        width={900}
        style={{
          borderRadius: 12,
          border: '1px solid #ddd',
        }}
      />

      <p style={{ marginTop: 12, lineHeight: 1.7 }}>
        Real-time onboard perception operating under glare, reflections,
        wave-induced motion, and dynamic maritime conditions. The system
        performed temporal object tracking and confidence-aware fusion
        directly on edge compute hardware for low-latency operation.
      </p>

      {/* NAVIGATION */}
      <h3 style={{ marginTop: 48 }}>Navigation-Aware Scene Understanding</h3>

      <img
        src={navigation}
        alt="Navigation-Aware Scene Understanding"
        width={900}
        style={{
          borderRadius: 12,
          border: '1px solid #ddd',
        }}
      />

      <p style={{ marginTop: 12, lineHeight: 1.7 }}>
        Dynamic multi-agent state estimation and navigation-aware scene
        representation used for autonomous maritime decision support.
        The system maintained spatial awareness of surrounding vessels,
        trajectories, and navigable regions in real time.
      </p>

      {/* TECH STACK */}
      <h3 style={{ marginTop: 48 }}>Technical Stack</h3>

      <p style={{ lineHeight: 1.8 }}>
        ROS · PyTorch · TensorRT · CUDA · OpenCV · Edge AI ·
        Kalman Filter · Multimodal Sensor Fusion ·
        Real-Time Tracking · Distributed Sensor Processing
      </p>
    </div>
  );
}
