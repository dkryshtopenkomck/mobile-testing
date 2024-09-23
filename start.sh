#!/bin/bash

# Set environment variables
export SIGNUM="ZKRYDMY"

# Run tests for azimuth-check
export SUITE_DIR="azimuth-check"
export BUILD_BS_NAME="Azimuth Check tests $DEVICE_NAME"
npm run local

# Run tests for barcode
export SUITE_DIR="barcode"
export BUILD_BS_NAME="Barcode tests $DEVICE_NAME"
npm run local
#
# Run tests for certificates
export SUITE_DIR="certificates"
export BUILD_BS_NAME="Certificates tests $DEVICE_NAME"
npm run local

# Run tests for certificates_disabled
export SUITE_DIR="certificates_disabled"
export BUILD_BS_NAME="Certificates Disabled tests $DEVICE_NAME"
npm run local

# Run tests for face-id
export SUITE_DIR="face-id"
export BUILD_BS_NAME="Face ID tests $DEVICE_NAME"
npm run local

# Run tests for field-team-support
export SUITE_DIR="field-team-support"
export BUILD_BS_NAME="Field Team Support tests $DEVICE_NAME"
npm run local

# Run tests for function-installation-wizard
export SUITE_DIR="function-installation-wizard"
export BUILD_BS_NAME="Function Installation Wizard tests $DEVICE_NAME"
npm run local

# Run tests for jobs
export SUITE_DIR="jobs"
export BUILD_BS_NAME="Jobs tests $DEVICE_NAME"
npm run local

# Run tests for launching-app
export SUITE_DIR="launching-app"
export BUILD_BS_NAME="Launching App tests $DEVICE_NAME"
npm run local

# Run tests for live_chat
export SUITE_DIR="live_chat"
export BUILD_BS_NAME="Live Chat tests $DEVICE_NAME"
npm run local

# Run tests for live_chat_disabled
export SUITE_DIR="live_chat_disabled"
export BUILD_BS_NAME="Live Chat Disabled tests $DEVICE_NAME"
npm run local

# Run tests for login
export SUITE_DIR="login"
export BUILD_BS_NAME="Login tests $DEVICE_NAME"
npm run local

# Run tests for menu-installation-wizard
export SUITE_DIR="menu-installation-wizard"
export BUILD_BS_NAME="Menu Installation Wizard tests $DEVICE_NAME"
npm run local

# Run tests for mops
export SUITE_DIR="mops"
export BUILD_BS_NAME="MOPS tests $DEVICE_NAME"
npm run local

# Run tests for notifications
export SUITE_DIR="notifications"
export BUILD_BS_NAME="Notifications tests $DEVICE_NAME"
npm run local

# Run tests for offline-mode
export SUITE_DIR="offline-mode"
export BUILD_BS_NAME="Offline Mode tests $DEVICE_NAME"
npm run local

# Run tests for pin-code
export SUITE_DIR="pin-code"
export BUILD_BS_NAME="Pin Code tests $DEVICE_NAME"
npm run local

# Run tests for privacy-modal
export SUITE_DIR="privacy-modal"
export BUILD_BS_NAME="Privacy Modal tests $DEVICE_NAME"
npm run local

# Run tests for projects
export SUITE_DIR="projects"
export BUILD_BS_NAME="Projects tests $DEVICE_NAME"
npm run local

# Run tests for provide-feedback
export SUITE_DIR="provide-feedback"
export BUILD_BS_NAME="Provide Feedback tests $DEVICE_NAME"
npm run local

# Run tests for rate-app
export SUITE_DIR="rate-app"
export BUILD_BS_NAME="Rate App tests $DEVICE_NAME"
npm run local

# Run tests for receive-hardware
export SUITE_DIR="receive-hardware"
export BUILD_BS_NAME="Receive Hardware tests $DEVICE_NAME"
npm run local

# Run tests for theme-changing
export SUITE_DIR="theme-changing"
export BUILD_BS_NAME="Theme Changing tests $DEVICE_NAME"
npm run local

# Run tests for user-functions
export SUITE_DIR="user-functions"
export BUILD_BS_NAME="User Functions tests $DEVICE_NAME"
npm run local

# Run tests for user-menu
export SUITE_DIR="user-menu"
export BUILD_BS_NAME="User Menu tests $DEVICE_NAME"
npm run local

# Run tests for vizual-int-reports
export SUITE_DIR="vizual-int-reports"
export BUILD_BS_NAME="Visual Intelligence Reports tests $DEVICE_NAME"
npm run local
