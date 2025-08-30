// src/lib/fontawesome.ts
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false; // Prevent CSS auto-injection
library.add(faBrain);