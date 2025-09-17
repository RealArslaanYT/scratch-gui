import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

export default [
    {
        name: (
            <FormattedMessage
                defaultMessage="HTTP Requests"
                description="Name for the 'HTTP Requests' extension"
                id="gui.extension.httpRequests.name"
            />
        ),
        extensionId: 'httpRequests',
        iconURL: "data:image/png;base64,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",
        insetIconURL: "data:image/png;base64,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",
        collaborator: "SCR4TCH | by Arslaan Pathan",
        description: (
            <FormattedMessage
                defaultMessage="Access the World Wide Web through Scratch!"
                description="Description for the 'HTTP Requests' extension"
                id="gui.extension.httpRequests.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense push, pull, motion, and spin."
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/vernier'
    }
];
