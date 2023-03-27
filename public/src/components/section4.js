import Arrow from "../assets/image/greenArrow.png";
const Section4 = () => {
  return (
    <div className="sec4_con container">
      <h1>HOW IT WORKS</h1>
      <p>
        The Beeline to Funding is an innovative Trader Development System which
        takes you step-by-step from a beginner trader to a professional trader
        in as little as 1 hour a day. In this system, you’ll gain “experience
        points” by watching training videos and by placing trades, because
        practice makes profit. As you gain points and increase your skills,
        you’ll rise through the Beeline hives from Copper, to Bronze, to Silver,
        and finally Gold! Upon completion of the Beeline system, you’ll be given
        your very own Beehive funding trading account so you can trade for
        profits with our money!
      </p>
      <span>
        <h1>Inside The "BEELINE TO FUNDING" You'll Get:</h1>
      </span>
      <div className="main4_sec">
        <div className="beel">
          <div>
            <img src={Arrow} alt="" />
            <span>The 12-Part "From Nobody to Expert Trader" Course</span>
          </div>
          <div>
            <img src={Arrow} alt="" />
            <span>
              100% Personal Access to support via Website, Webinar & Email
            </span>
          </div>
          <div>
            <img src={Arrow} alt="" />
            <span>
              Exclusive Access to Our "Funded Trader's Community Forum"{" "}
            </span>
          </div>
        </div>
        <div className="beel">
          <div>
            <img src={Arrow} alt="" />
            <span>Your Own Simulated Trading Account</span>
          </div>
          <div>
            <img src={Arrow} alt="" />
            <span>
              Hands-on trading experience with real money in real markets in
              real-time
            </span>
          </div>
          <div>
            <img src={Arrow} alt="" />
            <span>
              Exclusive Access to Our "Funded Trader's Community Forum"
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section4;
