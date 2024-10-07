import ContactMe from "./components/contact-me";
import Footer from "./components/footer";
import SocialMediaButtons from "./components/social-media-buttons";
import UserHeader from "./components/user-header";

export default function Home() {
  return (
    <div>
      <section className="container mx-auto">
      <div className="flex justify-center items-center flex-col">
        <div>
          <UserHeader />
          <SocialMediaButtons/>
          <ContactMe/>
          <Footer/>
        </div>
      </div>
    </section>
    <div>

    </div>
    </div>
  );
}
