import React from "react";
import { motion } from "framer-motion";
import {
  Accessibility,
  Bluetooth,
  Box,
  CalendarDays,
  CheckCircle2,
  Code2,
  Cpu,
  Gauge,
  Lock,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const cadImage = "/cad-thumbturn-lock.svg";

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-white/10 bg-white/[0.06] shadow-xl ${className}`}>
    {children}
  </div>
);

const Button = ({ children, href, variant = "primary" }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center rounded-xl px-6 py-4 text-base font-semibold transition ${
      variant === "primary"
        ? "bg-blue-400 text-slate-950 hover:bg-blue-300"
        : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
    }`}
  >
    {children}
  </a>
);

export default function SmartRetrofitDoorLockPortfolio() {
  const features = [
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Retrofit Lock Control",
      text: "A motorized attachment designed to rotate a standard thumb-turn lock without replacing the existing door hardware.",
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "Position Verification",
      text: "Uses sensor feedback to confirm whether the lock actually reached the locked or unlocked position.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Safety Handling",
      text: "Includes software logic for timeouts and jam detection to reduce strain on the motor and mechanism.",
    },
    {
      icon: <Accessibility className="h-6 w-6" />,
      title: "Accessibility Focused",
      text: "Built around the goal of helping users with reduced hand strength, arthritis, or mobility challenges operate a lock more easily.",
    },
  ];

  const skills = [
    "Arduino / ESP32 control logic",
    "Motor control and actuator selection",
    "Sensor-based feedback systems",
    "CAD concept development",
    "Mechanical coupler design",
    "Fault detection and timeout logic",
    "Prototype planning and testing",
    "Human-centered engineering design",
  ];

  const components = [
    "Thumb-turn coupler to grip and rotate the existing lock",
    "High-torque servo or stepper motor",
    "Motor driver electronics",
    "Arduino or ESP32 microcontroller",
    "Limit switches, reed switches, or microswitches for feedback",
    "External mountable housing with no permanent door modification",
  ];

  const timeline = [
    {
      phase: "1",
      title: "Requirements & Concept",
      text: "Defined the core problem, user needs, system requirements, safety goals, and retrofit constraints.",
    },
    {
      phase: "2",
      title: "Mechanical Design",
      text: "Planned the thumb-turn coupler, external housing, and motor placement for a removable attachment.",
    },
    {
      phase: "3",
      title: "Control Logic",
      text: "Developed Arduino-style logic for lock/unlock commands, sensor verification, and timeout handling.",
    },
    {
      phase: "4",
      title: "Prototype Testing",
      text: "Designed the testing plan for torque, alignment, jam handling, and locked/unlocked feedback validation.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-24 sm:px-10 lg:px-20">
        <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(15,23,42,0.96),rgba(14,28,45,0.92)_42%,rgba(4,30,27,0.82))]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-100">
              <Lock className="h-4 w-4" /> Personal Mechatronics Portfolio Project
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Smart Retrofit Door Locking Mechanism
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A self-directed engineering project exploring a low-cost smart lock attachment that can retrofit onto a
              traditional thumb-turn door lock and automate lock/unlock motion without permanently modifying the door.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#project-goal">View Project</Button>
              <Button href="#code-preview" variant="outline">
                See Code Preview
              </Button>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              Designed by Partha Roy Ballave · Focus areas: mechatronics · embedded systems · CAD · accessibility ·
              prototyping
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Card className="overflow-hidden bg-white/10 backdrop-blur">
              <img
                src={cadImage}
                alt="CAD screenshot of the thumb-turn lock coupler concept"
                className="aspect-square w-full object-cover"
              />
              <div className="grid grid-cols-2 gap-px border-t border-white/10 bg-white/10 text-center text-sm">
                <div className="bg-slate-950/70 p-4"><p className="text-slate-400">Type</p><p className="font-semibold">Retrofit</p></div>
                <div className="bg-slate-950/70 p-4"><p className="text-slate-400">Controller</p><p className="font-semibold">Arduino / ESP32</p></div>
                <div className="bg-slate-950/70 p-4"><p className="text-slate-400">Feedback</p><p className="font-semibold">Sensors</p></div>
                <div className="bg-slate-950/70 p-4"><p className="text-slate-400">Safety</p><p className="font-semibold">Timeout Logic</p></div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="project-goal" className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Project Goal</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Making smart lock functionality more accessible</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Traditional thumb-turn locks require manual rotation, which can be difficult for users with reduced hand
              strength or mobility limitations. Many smart locks are expensive and require replacing existing hardware.
              This project explores a removable retrofit mechanism that adds automatic lock control while preserving
              manual operation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="h-full text-white">
                  <div className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400/20 text-blue-200">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{feature.text}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/70 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <Card className="bg-slate-950/70 text-white">
            <div className="p-8">
              <div className="mb-5 flex items-center gap-3"><Cpu className="h-7 w-7 text-blue-300" /><h2 className="text-3xl font-bold">System Architecture</h2></div>
              <div className="space-y-4">
                {components.map((item) => (
                  <div key={item} className="flex gap-3 rounded-xl bg-white/[0.05] p-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-300" />
                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="bg-slate-950/70 text-white">
            <div className="p-8">
              <div className="mb-5 flex items-center gap-3"><Code2 className="h-7 w-7 text-green-300" /><h2 className="text-3xl font-bold">Skills Demonstrated</h2></div>
              <div className="grid gap-3 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div key={skill} className="rounded-xl border border-white/10 bg-white/[0.05] p-4 text-slate-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Design Preview</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">CAD Concept & Mechanism Layout</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The CAD reference shows the early thumb-turn coupler concept: a central rotating hub with extended grip
              arms designed to catch and rotate the existing lock without replacing the original hardware.
            </p>
            <div className="mt-6 space-y-3 text-slate-300">
              <div className="flex gap-3"><Wrench className="mt-1 h-5 w-5 shrink-0 text-blue-300" />Adjustable grip geometry for different thumb-turn shapes</div>
              <div className="flex gap-3"><Box className="mt-1 h-5 w-5 shrink-0 text-green-300" />Central hub planned for motor coupling and enclosure alignment</div>
              <div className="flex gap-3"><ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-yellow-300" />Sensor feedback points can be added around locked and unlocked limits</div>
            </div>
          </div>

          <Card className="overflow-hidden bg-slate-950/70 text-white">
            <img
              src={cadImage}
              alt="CAD concept layout for a smart retrofit door lock mechanism"
              className="aspect-[4/3] w-full object-cover"
            />
          </Card>
        </div>
      </section>

      <section id="code-preview" className="bg-slate-900/70 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Software Preview</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Arduino Control Logic</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The controller logic is designed around simple commands: rotate toward the target position, monitor sensor
              feedback, and stop safely if the expected state is not reached within a timeout window.
            </p>
            <div className="mt-6 space-y-3 text-slate-300">
              <div className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-300" /> Lock and unlock command functions</div>
              <div className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-300" /> Timeout protection for jammed locks</div>
              <div className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-300" /> Sensor-based position verification</div>
              <div className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-300" /> Optional Bluetooth or serial control path</div>
            </div>
          </div>

          <Card className="bg-slate-950 text-white">
            <div className="flex items-center gap-2 rounded-t-2xl border-b border-white/10 bg-white/[0.06] px-5 py-4">
              <div className="h-3 w-3 rounded-full bg-white/30" />
              <div className="h-3 w-3 rounded-full bg-white/30" />
              <div className="h-3 w-3 rounded-full bg-white/30" />
              <p className="ml-3 text-sm text-slate-400">smart_lock_controller.ino</p>
            </div>
            <pre className="overflow-x-auto p-6 text-sm leading-7 text-slate-300"><code>{`#include <Servo.h>

Servo lockMotor;
const int lockedSensor = 2;
const int unlockedSensor = 3;
const int motorPin = 9;
const unsigned long timeoutMs = 3000;

void setup() {
  lockMotor.attach(motorPin);
  pinMode(lockedSensor, INPUT_PULLUP);
  pinMode(unlockedSensor, INPUT_PULLUP);
  Serial.begin(9600);
}

bool rotateUntil(int targetAngle, int sensorPin) {
  unsigned long startTime = millis();
  lockMotor.write(targetAngle);

  while (digitalRead(sensorPin) == HIGH) {
    if (millis() - startTime > timeoutMs) {
      lockMotor.detach();
      Serial.println("Fault: timeout or jam detected");
      return false;
    }
  }

  Serial.println("Position confirmed");
  return true;
}

void lockDoor() {
  rotateUntil(160, lockedSensor);
}

void unlockDoor() {
  rotateUntil(20, unlockedSensor);
}`}</code></pre>
          </Card>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center gap-3"><CalendarDays className="h-8 w-8 text-blue-300" /><h2 className="text-3xl font-bold sm:text-4xl">Development Roadmap</h2></div>
          <div className="grid gap-5 md:grid-cols-4">
            {timeline.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full text-white">
                  <div className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-400/20 font-bold text-blue-100">{item.phase}</div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[linear-gradient(135deg,rgba(37,99,235,0.18),rgba(20,184,166,0.14))] px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-slate-950/60 p-8 text-center shadow-2xl">
          <Bluetooth className="mx-auto h-10 w-10 text-blue-300" />
          <h2 className="mt-4 text-3xl font-bold">Future Improvements</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Future versions could include Bluetooth control, a mobile app interface, battery monitoring, improved
            universal coupler geometry, and a refined 3D-printed enclosure for real-world prototype testing.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        Smart Door Locking Mechanism · Personal Engineering Portfolio Project · Partha Roy Ballave
      </footer>
    </div>
  );
}
