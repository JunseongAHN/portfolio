import Card from './components/Card';
 
export default function App() {
  return (
    <div>
      <h1>Junseong Ahn</h1>
 
      <p>Physical AI / Autonomous Systems / Perception Engineer</p>
 
      <hr />
 
      <h2>Projects</h2>
 
      <Card
        title="Maritime Autonomous Navigation"
        description="End-to-end perception and path-planning for surface vessels in open-water and port environments using lidar, radar, and camera fusion."
        thumbnail="/Thumbnail/MaritimeAutonomousNavigation.png"
        href="/MaritimeAutonomousNavigation"
      />
 
      <hr />
 
      <p>GitHub / LinkedIn / Resume</p>
    </div>
  );
}
 