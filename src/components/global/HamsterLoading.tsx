import "@/styles/global/loadingHamster.css";

export function HamsterLoading({ text }: { text: string }) {
  return (
    <div className="modal-overlay loader_background">
      <div className="loader_container">
        {/* HAMSTER */}
        <div
          aria-label="Orange and tan hamster running in a metal wheel"
          role="img"
          className="wheel-and-hamster"
        >
          <div className="wheel"></div>
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div className="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__limb hamster__limb--fr"></div>
              <div className="hamster__limb hamster__limb--fl"></div>
              <div className="hamster__limb hamster__limb--br"></div>
              <div className="hamster__limb hamster__limb--bl"></div>
              <div className="hamster__tail"></div>
            </div>
          </div>
          <div className="spoke"></div>
        </div>
        {/* TEXT + Animation */}
        <h4>
          {text}
          <span className="loader-dot loader-dot-1">.</span>
          <span className="loader-dot loader-dot-2">.</span>
          <span className="loader-dot loader-dot-3">.</span>
        </h4>
      </div>
    </div>
  );
}
