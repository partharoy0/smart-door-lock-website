import React from "react";
import { motion } from "framer-motion";
import {
  Lock,
  ShieldCheck,
  Wrench,
  Cpu,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  CalendarDays,
  Accessibility,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SmartRetrofitDoorLockWebsite() {
  const features = [
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Automatic Lock & Unlock",
      text: "Rotates a traditional thumb-turn clockwise or counterclockwise on command without replacing the existing lock hardware.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "High-Torque Actuation",
      text: "Designed around a high-torque servo or stepper motor to handle stiff locks and poor alignment conditions.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Safety Logic",
      text: "Uses timeouts, stall detection, and feedback verification to reduce the risk of overheating, jamming, or damaging the mechanism.",
    },
    {
      icon: <Accessibility className="h-6 w-6" />,
      title: "Accessible Retrofit Design",
      text: "Supports users with reduced hand strength, arthritis, or mobility challenges while preserving manual override when inactive.",
    },
  ];

  const components = [
    "Mechanical coupler to grip and rotate the thumb-turn",
    "High-torque servo or stepper motor with driver electronics",
    "Arduino or ESP32 microcontroller",
    "Power supply and motor driver",
    "Reed switches or microswitches for position feedback",
    "Control software for motor positioning, user commands, and fault handling",
  ];

  const timeline = [
    { weeks: "Weeks 1-2", task: "Requirements, motor selection, coupler design, and software architecture" },
    { weeks: "Weeks 3-4", task: "Initial motor control code and simulation or placeholder motor testing" },
    { weeks: "Weeks 5-6", task: "Hardware integration, lock/unlock testing, and control logic refinement" },
    { weeks: "Weeks 7-8", task: "Final testing, improvements, report writing, and demo preparation" },
  ];

  const challenges = [
    "Creating a coupler that grips different thumb-turn designs without slipping",
    "Providing enough torque for stiff or misaligned locks",
    "Detecting stalls and timing out safely during jams",
    "Verifying true locked and unlocked states using sensors instead of relying only on motor rotation",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.20),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-100">
              <Lock className="h-4 w-4" /> MTE301 Final Project Proposal
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Smart Retrofit Door Locking Mechanism
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              An affordable, accessible smart-lock attachment that retrofits onto a traditional thumb-turn lock and
              automatically rotates it to lock or unlock a door without permanent door modifications.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-2xl px-6 py-6 text-base">View Project Overview</Button>
              <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-6 py-6 text-base text-white hover:bg-white/10">
                See Timeline
              </Button>
            </div>
            <p className="mt-6 text-sm text-slate-400">Project by Partha Roy Ballave | Section 1 | GA: Shayan Sepahvand</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <Card className="rounded-[2rem] border-white/10 bg-white/10 shadow-2xl backdrop-blur">
              <CardContent className="p-8">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-900 p-6">
                  <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border-8 border-slate-700 bg-slate-800 shadow-inner">
                    <motion.div animate={{ rotate: [0, 35, -35, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="h-24 w-10 rounded-full bg-blue-400 shadow-lg" />
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3 text-center text-sm">
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-slate-400">Mode</p>
                      <p className="font-semibold">Retrofit</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-slate-400">Control</p>
                      <p className="font-semibold">Arduino / ESP32</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-slate-400">Feedback</p>
                      <p className="font-semibold">Limit Sensors</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-slate-400">Safety</p>
                      <p className="font-semibold">Stall Detection</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Problem Statement</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Making door access easier without replacing the lock</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Traditional door locks require manual thumb-turn operation, which can be difficult for people with arthritis,
              reduced hand strength, or mobility limitations. Existing smart locks can be expensive and often require
              replacing the current door hardware. This project focuses on a safer, lower-cost retrofit approach.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
                <Card className="h-full rounded-3xl border-white/10 bg-white/[0.06] text-white shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/20 text-blue-200">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{feature.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/70 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <Card className="rounded-3xl border-white/10 bg-slate-950/70 text-white">
            <CardContent className="p-8">
              <div className="mb-5 flex items-center gap-3">
                <Cpu className="h-7 w-7 text-blue-300" />
                <h2 className="text-3xl font-bold">System Components</h2>
              </div>
              <div className="space-y-4">
                {components.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-white/[0.05] p-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-300" />
                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-white/10 bg-slate-950/70 text-white">
            <CardContent className="p-8">
              <div className="mb-5 flex items-center gap-3">
                <AlertTriangle className="h-7 w-7 text-yellow-300" />
                <h2 className="text-3xl font-bold">Key Challenges</h2>
              </div>
              <div className="space-y-4">
                {challenges.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center gap-3">
            <CalendarDays className="h-8 w-8 text-blue-300" />
            <h2 className="text-3xl font-bold sm:text-4xl">Project Timeline</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {timeline.map((phase, index) => (
              <motion.div key={phase.weeks} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full rounded-3xl border-white/10 bg-white/[0.06] text-white">
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-400/20 font-bold text-blue-100">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold">{phase.weeks}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{phase.task}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/70 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Design Preview</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">CAD Concept & Mechanism Layout</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The retrofit device is planned around an external housing, a motor-driven coupler, and a thumb-turn gripping
              interface. These concept panels can be replaced with final CAD screenshots once the SolidWorks or Fusion 360
              model is complete.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="rounded-3xl border-white/10 bg-slate-950/70 text-white shadow-xl">
              <CardContent className="p-6">
                <div className="mb-5 flex items-center gap-3">
                  <Wrench className="h-6 w-6 text-blue-300" />
                  <h3 className="text-xl font-semibold">Thumb-Turn Coupler</h3>
                </div>
                <div className="relative h-56 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-6">
                  <div className="absolute left-1/2 top-1/2 h-28 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/30" />
                  <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-dashed border-white/20" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/10 p-3 text-sm text-slate-300">
                    Adjustable grip interface for different thumb-turn shapes.
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-white/10 bg-slate-950/70 text-white shadow-xl">
              <CardContent className="p-6">
                <div className="mb-5 flex items-center gap-3">
                  <Cpu className="h-6 w-6 text-green-300" />
                  <h3 className="text-xl font-semibold">Motor Housing</h3>
                </div>
                <div className="relative h-56 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-6">
                  <div className="absolute left-8 top-10 h-32 w-28 rounded-3xl border border-white/20 bg-white/10" />
                  <div className="absolute right-8 top-16 h-20 w-20 rounded-full border-8 border-green-300/60 bg-green-300/20" />
                  <div className="absolute left-20 top-24 h-4 w-28 rounded-full bg-white/20" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/10 p-3 text-sm text-slate-300">
                    Compact external enclosure for actuator and electronics.
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-white/10 bg-slate-950/70 text-white shadow-xl">
              <CardContent className="p-6">
                <div className="mb-5 flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-yellow-300" />
                  <h3 className="text-xl font-semibold">Sensor Feedback</h3>
                </div>
                <div className="relative h-56 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-6">
                  <div className="absolute left-10 top-14 h-28 w-12 rounded-full bg-blue-400/80" />
                  <div className="absolute right-10 top-12 h-10 w-20 rounded-xl bg-yellow-300/40 ring-2 ring-yellow-300/50" />
                  <div className="absolute right-10 top-28 h-10 w-20 rounded-xl bg-yellow-300/20 ring-2 ring-yellow-300/30" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/10 p-3 text-sm text-slate-300">
                    Limit or reed switches confirm locked/unlocked states.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Software Preview</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Arduino Control Logic</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The software will control motor movement, check sensor feedback, and stop the mechanism if the lock jams or
              does not reach the expected position within a safe time window.
            </p>
            <div className="mt-6 space-y-3 text-slate-300">
              <div className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-green-300" /> Lock and unlock command functions</div>
              <div className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-green-300" /> Timeout protection for jammed locks</div>
              <div className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-green-300" /> Sensor-based position verification</div>
              <div className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-green-300" /> Manual override preserved when inactive</div>
            </div>
          </div>

          <Card className="rounded-3xl border-white/10 bg-slate-950 text-white shadow-2xl">
            <CardContent className="p-0">
              <div className="flex items-center gap-2 rounded-t-3xl border-b border-white/10 bg-white/[0.06] px-5 py-4">
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
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-500/20 to-green-500/10 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Expected Outcomes</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What the project will produce</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {[
              "Working software package for lock/unlock operations with safety checks",
              "Prototype demonstration device for proof of concept",
              "Complete report covering requirements, analysis, design, and testing",
              "Potential extension with mobile app or Bluetooth-based control",
            ].map((outcome) => (
              <Card key={outcome} className="rounded-3xl border-white/10 bg-slate-950/60 text-white">
                <CardContent className="flex gap-3 p-6">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-300" />
                  <p className="leading-7 text-slate-300">{outcome}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center shadow-2xl">
          <Smartphone className="mx-auto h-10 w-10 text-blue-300" />
          <h2 className="mt-4 text-3xl font-bold">Inclusive engineering for everyday access</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            The project supports equity by designing around accessibility needs from the start. By creating a removable
            retrofit mechanism, the design aims to make smart lock functionality more affordable and practical for more users.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        Smart Retrofit Door Locking Mechanism | MTE301 Final Project Proposal | Partha Roy Ballave
      </footer>
    </div>
  );
}
