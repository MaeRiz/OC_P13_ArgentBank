import IconMoney from "../assets/img/icon-money.png";
import IconSecurity from "../assets/img/icon-security.png";
import IconChat from "../assets/img/icon-chat.png";
import Feature from "../components/Feature";

const Home = () => {
  const features = [
    {
      title: "You are our #1 priority",
      img: IconChat,
      desc: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      title: "More savings means higher rates",
      img: IconMoney,
      desc: "The more you save with us, the higher your interest rate will be!",
    },
    {
      title: "Security you can trust",
      img: IconSecurity,
      desc: "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  return (
    <main>
      <div class="hero">
        <section class="hero-content">
          <h2 class="sr-only">Promoted Content</h2>
          <p class="subtitle">No fees.</p>
          <p class="subtitle">No minimum deposit.</p>
          <p class="subtitle">High interest rates.</p>
          <p class="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section class="features">
        <h2 class="sr-only">Features</h2>
        {features.map((item, index) => (
          <Feature content={item} key={index} />
        ))}
      </section>
    </main>
  );
};

export default Home;
