import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';

interface MenuLinkProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}

const Logo = () => (
  <svg width="71" height="36" viewBox="0 0 71 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
    <g clipPath="url(#clip0_navbar_logo)">
        <path d="M67.9112 17.0816L67.8741 17.1188C68.1343 16.4126 68.6546 16.1524 69.1006 16.1524C69.7325 16.1524 70.29 16.6356 70.29 17.3418C70.29 17.4905 70.29 17.6763 70.2157 17.8993C68.9148 21.2445 66.1643 22.9542 63.4882 23.2144C62.2617 25.2958 60.2546 26.8197 57.3926 26.8197C53.3041 26.8197 51.4829 23.5861 51.4829 20.0551C51.4829 15.7064 54.2334 10.8745 58.8422 10.8745C59.8457 10.8745 60.7006 11.0976 61.4068 11.3949C63.4882 12.1754 64.8263 14.8887 64.8263 17.7878C64.8263 18.717 64.7519 19.6462 64.5289 20.5383C65.9042 20.0551 67.205 18.94 67.9112 17.0816ZM60.1431 13.9223V13.8852C59.3254 13.8852 58.8422 14.963 58.8422 16.2639C58.8422 18.1595 59.8829 19.9064 61.5183 20.5383C61.7785 19.7206 61.89 18.7914 61.89 17.7135C61.89 15.6321 61.2581 13.9223 60.1431 13.9223ZM57.4298 24.1064C58.4705 24.1064 59.5112 23.6604 60.3289 22.7312C57.913 21.6533 56.3891 19.1259 56.3891 16.7099C56.3891 15.8922 56.5378 15.0374 56.7608 14.294C55.2741 15.5206 54.4192 17.9365 54.4192 20.0551C54.4192 22.8055 55.7201 24.1064 57.4298 24.1064Z" fill="currentColor"/>
        <path d="M52.0568 17.0816L52.0196 17.1188C52.2798 16.4126 52.7258 16.1153 53.1718 16.1153C53.8037 16.1153 54.4355 16.6728 54.4355 17.379C54.4355 17.5648 54.3984 17.7135 54.324 17.8993C52.8745 21.4303 50.7187 25.556 47.2621 27.9719L47.1878 28.7153C46.7789 33.1755 44.5117 36.0002 41.6497 36.0002C39.4939 36.0002 38.2302 34.5135 38.2302 32.7666C38.2302 29.6073 41.4638 28.4551 44.4745 26.5224C44.5488 25.7418 44.586 24.8498 44.6231 23.8462C43.1364 25.4816 41.5382 26.1507 40.1258 26.1507C37.301 26.1507 34.9966 23.8462 34.9966 20.3153C34.9966 14.8887 38.5647 11.3206 42.5417 11.3206H42.5789C45.2922 11.3206 48.1913 12.7701 48.1913 15.3719C48.1913 16.2268 47.8196 20.8728 47.5223 24.4781C49.5293 22.5825 51.2019 19.4976 52.0568 17.0816ZM40.5346 23.4746C41.9099 23.4746 43.7683 22.6197 44.9205 18.4197C45.1063 17.4905 45.2178 16.6728 45.1807 15.7064C44.9577 14.7029 44.1028 14.1082 42.8762 14.1082C40.3488 14.1082 37.9329 16.5241 37.9329 20.2038C37.9329 22.4339 38.9736 23.4746 40.5346 23.4746ZM41.947 33.287H41.9842C42.7647 33.287 43.6196 32.7666 44.1771 29.4215C42.5417 30.3878 41.0178 31.3542 41.0178 32.5064C41.0178 32.9896 41.3895 33.287 41.947 33.287Z" fill="currentColor"/>
        <path d="M35.649 17.0816L35.6119 17.1188C35.872 16.4126 36.3924 16.1524 36.8384 16.1524C37.4703 16.1524 38.0278 16.6356 38.0278 17.3418C38.0278 17.4905 38.0278 17.6763 37.9535 17.8993C36.6526 21.2445 33.9021 22.9542 31.226 23.2144C29.9995 25.2958 27.9924 26.8197 25.1304 26.8197C21.0419 26.8197 19.2207 23.5861 19.2207 20.0551C19.2207 15.7064 21.9711 10.8745 26.58 10.8745C27.5835 10.8745 28.4384 11.0976 29.1446 11.3949C31.226 12.1754 32.5641 14.8887 32.5641 17.7878C32.5641 18.717 32.4897 19.6462 32.2667 20.5383C33.642 20.0551 34.9428 18.94 35.649 17.0816ZM27.8809 13.9223V13.8852C27.0632 13.8852 26.58 14.963 26.58 16.2639C26.58 18.1595 27.6207 19.9064 29.2561 20.5383C29.5163 19.7206 29.6278 18.7914 29.6278 17.7135C29.6278 15.6321 28.9959 13.9223 27.8809 13.9223ZM25.1676 24.1064C26.2083 24.1064 27.249 23.6604 28.0667 22.7312C25.6508 21.6533 24.1269 19.1259 24.1269 16.7099C24.1269 15.8922 24.2756 15.0374 24.4986 14.294C23.0119 15.5206 22.157 17.9365 22.157 20.0551C22.157 22.8055 23.4579 24.1064 25.1676 24.1064Z" fill="currentColor"/>
        <path d="M21.1096 15.9083C20.5892 15.9083 20.1432 16.1685 19.8458 16.8747C18.8795 19.3278 16.8723 23.4907 14.828 23.4907C13.5408 23.4907 12.5447 23.1996 11.5381 22.9054C10.5102 22.605 9.47142 22.3013 8.10053 22.3013C7.61733 22.3013 6.94829 22.3757 6.31642 22.4872C8.22 19.8914 8.93114 16.7477 9.62022 10.8054C8.32276 10.7228 7.26735 10.4831 6.49807 10.241C5.67642 17.7775 4.74336 20.6511 1.33579 23.4907C0.889758 23.8624 0.666748 24.3828 0.666748 24.9032C0.666748 25.7209 1.37296 26.4271 2.26502 26.4271C2.56237 26.4271 2.89688 26.3156 3.2314 26.1669C5.12702 25.312 6.27925 25.089 7.69167 25.089C8.58984 25.089 9.66458 25.3459 10.8152 25.6208C12.1406 25.9376 13.5667 26.2784 14.9396 26.2784C17.9502 26.2784 19.9202 23.3421 22.1131 17.6552C22.2247 17.4694 22.2618 17.2464 22.2618 17.0605C22.2618 16.3543 21.7043 15.9083 21.1096 15.9083Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M6.68666 8.70287C7.35975 8.93784 8.41057 9.2114 9.773 9.29233L9.99601 9.29222C14.1961 9.29222 16.9466 6.6904 16.9466 3.56821C16.9466 1.56109 15.3855 0 13.1925 0C10.2562 0 8.21191 2.00712 7.17118 5.98419C5.87027 5.27798 4.97822 4.01424 4.53219 2.41598C4.30917 1.63543 3.82598 1.15223 3.15693 1.15223C2.33922 1.15223 1.81885 1.78411 1.81885 2.63899C1.81885 5.16648 3.78881 7.58245 6.68798 8.69752L6.68666 8.70287ZM10.219 6.57889C10.7765 4.01424 11.6686 2.78767 12.858 2.78767C13.4899 2.78767 13.8987 3.15936 13.8987 3.8284C13.8987 5.05497 12.5978 6.50455 10.219 6.57889Z" fill="currentColor"/>
    </g>
    <defs><clipPath id="clip0_navbar_logo"><rect width="70" height="36" fill="white" transform="translate(0.666748)"/></clipPath></defs>
  </svg>
);

const Icons = {
  OnlineCourses: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" fill="currentColor"/></svg>,
  LearningResources: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-1-1 1V4zm9 16H6V4h1v9l3-3 3 3V4h2v16z" fill="currentColor"/></svg>,
  ContactUs: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm0 18c-4.42 0-8-3.59-8-8s3.58-8 8-8 8 3.59 8 8-3.58 8-8 8zM11 7h2v2h-2zm0 4h2v6h-2z" fill="currentColor"/></svg>,
  BlogPosts: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/></svg>,
  UserDashboard: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z" fill="currentColor"/></svg>,
  SupportCenter: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 2H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v2H7v2h10v-2h-2v-2h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5V4h14v12zM12 5.1c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-1 5h2v2h-2z" fill="currentColor"/></svg>,
  FeedbackForm: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM18 11h-2V5h2v6zm0 4h-2v-2h2v2z" fill="currentColor"/></svg>,
  SpecialOffers: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.01zM6.5 6.5C5.67 6.5 5 5.83 5 5s.67-1.5 1.5-1.5S8 4.17 8 5s-.67 1.5-1.5 1.5z" fill="currentColor"/></svg>,
  PrivacyPolicy: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10.99h-7V2.11l7 3.11V12z"/><path d="M12 12H5V6.3l7-3.11v8.8z"/></g><text x="12" y="14.5" fontSize="6" fill="currentColor" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">@</text></svg>,
  TermsOfUse: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.04 14H12v-4l-1.48-3.95-1.48 3.95z" fill="currentColor"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 16h-4v-2h4v2zm-6 0H6v-2h2v2zM5 15V5h14v10H5z" fill="currentColor"/><path d="M17 15h2v2h-2zm-8 0h2v2H9z" fill="currentColor"/></svg>,
  CommunityForum: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" fill="currentColor"/></svg>,
  NewsletterSignup: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill="currentColor"/></svg>,
};

const DropdownMenuLink = ({ icon, title, description, onClick }: MenuLinkProps) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      if(onClick) onClick();
    }}
    className="flex items-start gap-4 p-2 rounded-lg transition-colors hover:bg-black/5"
  >
    <div className="flex-shrink-0 w-6 h-6 mt-1 text-black">{icon}</div>
    <div>
      <p className="font-semibold text-base text-black">{title}</p>
      <p className="text-sm text-black/70">{description}</p>
    </div>
  </a>
);

const Navbar: React.FC = () => {
  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   if (!darkMode) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // };

  return (
    <nav className="bg-[#FFEFEC]">
      <div className="container mx-auto h-24 flex items-center justify-between px-4">
        <div className="flex items-center gap-8"> 
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="normal-case font-normal text-base text-black">Home</Link>
            <Link to="/courses" className="normal-case font-normal text-base text-black">Courses Offered</Link>
            <Link to="/about" className="normal-case font-normal text-base text-black">About Us</Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="normal-case font-normal text-base "> 
                  More Links <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-auto p-0 mt-4 shadow-lg border border-black/15 rounded-xl overflow-hidden" align="center">
                <div className="flex bg-[#FFEFEC]"> 
                  <div className="flex px-8 py-6 gap-6"> 
                    <div className="flex flex-col gap-y-4"> 
                      <p className="font-semibold text-sm text-black mb-2 px-2">Explore Learning</p>
                      <DropdownMenuLink icon={<Icons.OnlineCourses />} title="Online Courses" description="Find courses tailored to your needs." />
                      <DropdownMenuLink icon={<Icons.LearningResources />} title="Learning Resources" description="Discover tools for effective learning." />
                      <DropdownMenuLink icon={<Icons.ContactUs />} title="Contact Us" description="Get in touch for support and inquiries." />
                      <DropdownMenuLink icon={<Icons.BlogPosts />} title="Blog Posts" description="Read tips and insights on education." />
                    </div>
  
                    <div className="flex flex-col gap-y-4"> 
                      <p className="font-semibold text-sm text-black mb-2 px-2">More Options</p>
                      <DropdownMenuLink icon={<Icons.UserDashboard />} title="User Dashboard" description="Manage your courses and preferences." />
                      <DropdownMenuLink icon={<Icons.SupportCenter />} title="Support Center" description="FAQs and help resources available." />
                      <DropdownMenuLink icon={<Icons.FeedbackForm />} title="Feedback Form" description="Share your thoughts and suggestions." />
                      <DropdownMenuLink icon={<Icons.SpecialOffers />} title="Special Offers" description="Check out our latest promotions." />
                    </div>

                    <div className="flex flex-col gap-y-4">
                      <p className="font-semibold text-sm text-black mb-2 px-2">Additional Links</p>
                      <DropdownMenuLink icon={<Icons.PrivacyPolicy />} title="Privacy Policy" description="Learn how we protect your data." />
                      <DropdownMenuLink icon={<Icons.TermsOfUse />} title="Terms of Use" description="Understand our service terms and conditions." />
                      <DropdownMenuLink icon={<Icons.CommunityForum />} title="Community Forum" description="Join discussions with fellow learners." />
                      <DropdownMenuLink icon={<Icons.NewsletterSignup />} title="Newsletter Signup" description="Stay updated with our latest news." />
                    </div>
                  </div>
  
                  <div className="flex flex-col gap-y-4 px-8 py-6 bg-[#FFDFDA] w-64"> 
                    <p className="font-semibold text-sm text-black mb-2">Quick Links</p>
                    <a href="#" className="text-sm text-black py-2 rounded hover:underline">Help Center</a> 
                    <a href="#" className="text-sm text-black py-2 rounded hover:underline">Contact Support</a> 
                    <a href="#" className="text-sm text-black py-2 rounded hover:underline">User Guide</a> 
                    <a href="#" className="text-sm text-black py-2 rounded hover:underline">Site Map</a> 
                    <a href="#" className="text-sm text-black py-2 rounded hover:underline">Learning Hub</a> 
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {/* <Switch
            onChange={toggleDarkMode}
            checked={darkMode}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
          /> */}
          <Button variant="outline" className="border-black/20 hover:bg-black/5 text-black normal-case font-medium text-base px-6 py-2.5 h-auto rounded-lg  dark:border-white/20"> {/* Font weight 500 */}
            Join
          </Button>
          <Button className="bg-[#FF6347] hover:bg-[#E05230] text-white normal-case font-medium text-base px-6 py-2.5 h-auto rounded-lg shadow-none border border-[#FF6347]"> {/* Font weight 500, added border */}
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
