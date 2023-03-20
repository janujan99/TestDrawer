import { useState } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  const handleOpen = () => {
    setShowOverlay(true);
  };

  const handleClose = () => {
    setShowOverlay(false);
    onClose();
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 transition-all ${
          showOverlay ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleClose}
      ></div>
      <div
        className={`fixed top-0 left-0 bottom-0 w-72 bg-white shadow-lg transition-all ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-200">
          <h3 className="text-lg font-medium">Drawer Title</h3>
          <button onClick={handleClose} className="btn btn-sm btn-ghost">
            Close
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </>
  );
};

export default Drawer;
