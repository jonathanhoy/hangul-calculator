import React from 'react';
import swal from '@sweetalert/with-react';

const year = new Date();
const currentyear = year.getFullYear();

export const fireOverviewSwal = () => {
  swal(
    <div>
      <h2>App overview</h2>
      <p>I built this app to help with memorizing Korean numbers in both the Sino and Pure/Native number systems. The calculator tool generates math problems for you to solve to help you memorize Korean numbers. The clock tool helps you to memorize numbers in the context of time.</p>
      <p>Understanding that each system is used in different situations, the app's intention is simply to practice memorization.</p>
      <p>Good luck in your studies!</p>
      <p>&copy; <a href="https://jonathanhoy.com" aria-label="Go to Jonathan Hoy's personal portfolio, opens in a new window" target="_blank" rel="noreferrer">Jonathan Hoy</a> {currentyear}</p>
    </div>
  )
}

export const fireFeaturesSwal = () => {
  swal(
    <div>
      <h3>Features</h3>
      <p>By keeping the 'Simple numbers' setting checked, you will be limited to problems in the range of 1-10. Unchecking 'Simple numbers' will allow problems in the range of 1-100.</p>
      <p>The 'Multiple choice' setting changes the answer format which is useful if you do not have a Korean keyboard or if you wish to try a different challenge.</p>
      <p>You can click/tap the Sino and Pure buttons for a reference of each number system.</p>
    </div>
  )
}