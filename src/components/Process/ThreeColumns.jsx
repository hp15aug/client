const ThreeColumns = () => {
  return (
    <div className="flex justify-between w-full bg-white px-32 text-justify pt-24 pb-32 max-w-full box-border">
      {/* Column 1 */}
      <div className="flex-1 mx-4 p-5 text-gray-700 autoShow">
        <h2 className="text-2xl font-bold mb-4 text-black ">​Real-Time Surgery Assistance</h2>
        <p>
        AR provides 3D anatomical overlays during surgery, allowing better precision without large incisions. Microsoft HoloLens helps surgeons visualize organs and tissues in real-time.
        </p>
      </div>

      {/* Column 2 */}
      <div className="flex-1 mx-4 p-5 text-gray-700 autoShow">
        <h2 className="text-2xl font-bold mb-4 text-black">​Interactive 3D Anatomy Apps</h2>
        <p>
        Apps like Touch Surgery and Complete Anatomy allow students to explore the human body in detail, improving medical learning.
        </p>
      </div>

      {/* Column 3 */}
      <div className="flex-1 mx-4 p-5 text-gray-700 autoShow">
        <h2 className="text-2xl font-bold mb-4 text-black">​Medical Education & Training </h2>
        <p className="text-lg">
       AR provides interactive anatomy lessons, allowing students to explore the human body in 3D without cadavers. Complete Anatomy and BioDigital Human offer detailed virtual dissections.
        </p>
      </div>
    </div>
  );
};

export default ThreeColumns;
