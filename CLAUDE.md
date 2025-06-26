# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an A-Frame VR application demonstrating text-to-speech (TTS) functionality. The project consists of a simple VR scene where users can click on 3D objects to hear spoken text using the Web Speech API.

## Architecture

- **Static HTML application**: No build process required - runs directly in browser
- **Core files**:
  - `index.html`: Main VR scene with A-Frame entities
  - `aframe-tts-component.js`: Custom A-Frame component implementing TTS functionality
  - `aframe-v1.2.0.min.js`: A-Frame framework (v1.2.0)

## Key Components

### TTS Component (`aframe-tts-component.js`)
- Custom A-Frame component that adds text-to-speech to any entity
- Schema properties: `text` (spoken content), `on` (trigger event), `loop` (repeat flag)
- Uses Web Speech API (`speechSynthesis`) with English US voice at 1.2x rate
- Triggered by cursor clicks on entities with `data-raycastable` attribute

### Scene Structure (`index.html`)
- VR scene with interactive 3D objects (sphere, box, cylinder, plane)
- Each object has `tts` component with different text fragments
- Cursor-based interaction system using A-Frame's raycaster
- Background sky texture and instructional text

## Development

This is a client-side only application - simply open `index.html` in a browser to run. No build tools, package managers, or local server required.

## Browser Compatibility

Requires browsers supporting both A-Frame WebXR and Web Speech API (Speech Synthesis). Most modern browsers support these features.