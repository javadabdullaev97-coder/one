"use client";

import Link from "next/link";
import Image from "next/image";
import regionImageLoader from "@/lib/image-loader";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowUpRight,
  Shield, Users, Lightbulb, Target, Handshake,
  Mail, Phone,
} from "lucide-react";
import Parallax from "@/components/Parallax";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import HeroSection from "@/components/HeroSection";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import UzbekistanMap from "@/components/UzbekistanMap";
import DisciplinesIntegration from "@/components/DisciplinesIntegration";
import InsightsSection from "@/components/InsightsSection";
