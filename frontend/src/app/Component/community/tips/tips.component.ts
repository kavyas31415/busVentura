import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrl: './tips.component.css',
  
})
export class TipsComponent {
  // Default tips
  tips = [
    { title: 'Stay Hydrated', description: 'Always carry a water bottle and stay hydrated during your travels.' },
    { title: 'Pack Light', description: 'Only bring essentials to avoid unnecessary baggage.' },
    { title: 'Plan Ahead', description: 'Research your destination and plan your itinerary before you go.' }
  ];

  // Method to add a new tip
  addTip(tipForm: any) {
    if (tipForm.valid) {
      // Add the new tip
      this.tips.push({
        title: tipForm.value.title,
        description: tipForm.value.description
      });

      // Remove the oldest tip if there are more than 3 tips
      if (this.tips.length > 3) {
        this.tips.shift(); // Remove the first (oldest) tip
      }

      // Reset form
      tipForm.resetForm();
    }
  }

}
