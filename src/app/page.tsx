import { SignedIn, SignOutButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div>
      Home Page
      <div>
        <SignedIn>
          <SignOutButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default HomePage;
