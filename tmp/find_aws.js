const si = require('react-icons/si');
const fa = require('react-icons/fa');

const siKeys = Object.keys(si).filter(k => k.toLowerCase().includes('aws') || k.toLowerCase().includes('amazon'));
const faKeys = Object.keys(fa).filter(k => k.toLowerCase().includes('aws') || k.toLowerCase().includes('amazon'));

console.log('SI:', siKeys);
console.log('FA:', faKeys);
