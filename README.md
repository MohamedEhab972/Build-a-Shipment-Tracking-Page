# Shipment Tracking Application

This project is a shipment tracking application built to fulfill the requirements specified in the technical assessment. The application allows users to search for shipment details, view progress timelines, and enjoy a fully localized and responsive interface.

## Features

### 1. Shipment Search
- A search bar is implemented to allow users to input a shipment tracking number and retrieve shipment details.

### 2. Shipment Details
- Display key shipment details after a search:
  - **Tracking Number**
  - **Current Status** (e.g., Pending, Processing, Out for Delivery, Delivered)
  - **Expected Delivery Date** (Replaced by status if the delivery reaches a final state, such as Delivered or Returned).

### 3. Delivery Timeline
- A progress timeline shows the following shipment stages:
  1. Shipment Created
  2. Picked Up
  3. In Transit
  4. Out for Delivery
  5. Delivered
- The current stage and its timestamp are visually highlighted.

### 4. Localization
- Support for multiple languages, starting with:
  - **English**
  - **Arabic**

### 5. Error Handling
- Displays user-friendly error messages for:
  - Invalid or missing tracking numbers.
  - Network errors, with fallback UI elements or notifications.

### 6. API Integration
- Uses the provided mock API to fetch shipment data based on the tracking number:
  - **Endpoint:** `https://tracking.bosta.co/shipments/track/:trackingNumber`
  - **Required Header:** `x-requested-by: Bosta`
  - **Sample Tracking Numbers:** `36406704`, `69171493`, `7234258`, `9442984`, `1094442`

### 7. Styling and Responsiveness
- The application follows the provided Figma design for consistency.
- Fully responsive for:
  - Mobile
  - Tablet
  - Desktop

### 8. Dark Mode
- Includes a toggle for light and dark modes, adhering to the design system.

### 9. Animations
- Subtle animations are added for:
  - Timeline updates.
  - Data loading, enhancing user experience.

---

## Steps to Set Up and Run the Application

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/MohamedEhab972/Build-a-Shipment-Tracking-Page.git
 
   ```

2. **Install Dependencies:**
   Make sure you have Node.js and npm installed, then run:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root directory and add the required environment variables:
   ```env
   REACT_APP_API_BASE_URL=https://tracking.bosta.co/shipments/track
   REACT_APP_REQUESTED_BY_HEADER=Bosta
   ```

4. **Run the Application:**
   Start the development server:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

5. **Build for Production (Optional):**
   To create an optimized production build:
   ```bash
   npm run build
   ```

6. **Deploy:**
   Deploy the application using your preferred platform (e.g., Vercel, Netlify).

---

## Notes on Additional Features or Assumptions

- **Localization:** Arabic translation was implemented, assuming the Figma design supports RTL layouts.
- **Fallbacks:** If no tracking information is available, an informative message is displayed to the user.
- **Design Enhancements:** Minor adjustments were made to improve responsiveness and ensure better usability.
- **Dark Mode:** Implemented using Tailwind CSS’s dark mode feature.
- **Animations:** Added with CSS transitions for smooth user interaction.
