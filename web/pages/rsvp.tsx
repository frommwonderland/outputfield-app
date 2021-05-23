import classnames from "classnames";
import Image from "next/image";
import React from "react";
import "tailwindcss/tailwind.css";
import { SignUpButton } from "../components/sign-up-button/sign-up-button.component";

const Link: React.FC<{
  className?: string;
  href?: string;
  target?: string;
}> = ({ className, children, href, target }) => {
  return (
    <a
      className={classnames(
        "text-lg font-semibold filter drop-shadow-2xl",
        className
      )}
      style={{
        color: "rgb(4, 4, 255)",
        textShadow: `0 0 2px rgba(4, 4, 255, 0.4)`,
      }}
      href={href}
      target={target}
    >
      {children}
    </a>
  );
};

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Image src="/SGLogo.png" alt="decorative arc" height="200" width="222" />
  );
};

const Header: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={classnames("p-5 text-center", className)}>
      <div className="text-center flex flex-col">
        <div>
          <Logo className="mb-6" />
        </div>
        <Link className="uppercase" href="/" target="_blank">Output Field</Link>
        <div className="uppercase text-lg">Debut showcase</div>
      </div>
    </div>
  );
};

const DaySubheader: React.FC = ({ children }) => {
  return <h3 className="text-lg font-bold pb-1">{children}</h3>;
};

const Day: React.FC<{
  className?: string;
  day: string;
  date: string;
  time: string;
  rsvpLink: string;
  room: ReturnType<React.FC>;
  happening: ReturnType<React.FC>;
  who: ReturnType<React.FC>;
  description: ReturnType<React.FC>;
}> = ({
  className,
  day,
  date,
  time,
  room,
  happening,
  rsvpLink,
  who,
  description,
}) => {
  return (
    <div className={classnames("", className)}>
      <div className="pb-6">
        <div className="font-serif italic text-gray-700 pb-2 text-base">
          {day}
        </div>
        <div className="font-serif italic text-4xl pb-2">
          {date}
          <span className="text-base pl-4">{time}</span>
        </div>
        <Link className="mb-6" href={rsvpLink} target="_blank">
          RSVP
        </Link>
      </div>
      <div className="h-24 text-lg leading-snug">
        <DaySubheader>What Room is Opening?</DaySubheader>
        {room}
      </div>
      <div className="h-24 text-lg leading-snug">
        <DaySubheader>What else is Happening?</DaySubheader>
        {happening}
      </div>
      <div className="h-28 text-lg leading-snug">
        <DaySubheader>Who?</DaySubheader>
        {who}
      </div>
      <div className="text-md leading-snug">{description}</div>
    </div>
  );
};

const Wednesday: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Day
      className={classnames("", className)}
      day="Wednesday"
      time="3PM PST"
      date="6/16"
      rsvpLink="https://skingarden-day1.splashthat.com/"
      room={<div>Skin Garden Lobby & Walk-ins Welcome</div>}
      happening={<div>DJ sets hosted by Bien Agiter</div>}
      who={<div>Soft Matter, Online Threat, +</div>}
      description={
        <div>
          Get acquainted with the Skin Garden lobby. This will be our living
          room for the next three days. Some of our artist friends will be
          streaming some mixes over Zoom. Zoom code will be in the New Art City
          space
        </div>
      }
    />
  );
};

const Thursday: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Day
      className={classnames("", className)}
      day="Thursday"
      date="6/17"
      time="9AM PST"
      rsvpLink="https://skingarden-day2.splashthat.com/"
      room={<div>Bodies Unhinge</div>}
      happening={<div>Panel Discussion, Q&A</div>}
      who={<div>Betty Apple, IOR50, Venus in Foil</div>}
      description={
        <div>
          Tune in to hear the approach behind the room, Bodies Unhinge. The
          artists behind the space discuss the process behind articulating queer
          affect, through breath, movement, voice. There will be a Q&A at the
          end.
        </div>
      }
    />
  );
};

const Friday: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Day
      className={classnames("", className)}
      day="Friday"
      date="6/18"
      time="11AM PST"
      rsvpLink="https://skingarden-day3.splashthat.com/"
      room={<div>Reconsider Flesh</div>}
      happening={<div>Listening Session (Theory for context)</div>}
      who={<div>TBA+</div>}
      description={
        <div>
          We will be broadcasting some literature and theory that inspired the
          concept behind Reconsider Flesh, namely the soundscape. Tune in to
          hear thoughts on our relationship with bodies, and the plurality they
          carry with them.
        </div>
      }
    />
  );
};

const Rsvp = () => {
  return (
    <div className="bg-gray-300 min-h-screen flex justify-center pt-20">
      <div className="container">
        <div className="grid grid-rows-1 grid-auto-cols gap-10">
          <Header className="row-start-1 col-start-1 w-64" />
          <div className="row-start-1 col-start-2 ">
            <div className="grid grid-auto-rows grid-cols-rsvp gap-x-16 gap-y-10">
              <Wednesday className="col-start-1 row-start-1" />
              <Thursday className="col-start-2 row-start-1" />
              <Friday className="col-start-3 row-start-1" />
              <div className="col-start-1 row-start-2 col-span-2">
                <div className="font-serif text-4xl italic">
                  We’re raising funds for the featured artists. Donate to
                  nourish the underground!
                </div>
              </div>
              <div className="col-start-3 row-start-2">
                <div className="text-center mt-3">
                  <SignUpButton buttonText="Donate"></SignUpButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
