Packages and Libraries Used:

- TailwindCSS: Employed for efficient styling and responsive design.
- clsx: Utilized for managing dynamic class names within components.

Implementation:

- Developed reusable components to streamline code, enhance maintainability, and reduce redundancy of code throughout the application.
- Candidates data is from dummy_candidates.ts to ensure dynamic content rendering.
- Implemented two utility classes to optimize Tailwind classes usage within components and other for managing color codes based on score levels.
- Created a Tailwind plugin, inside tailwind.config.js, to generate CSS variables for all Tailwind color classes, promoting consistent color management.

Edge Cases Handling:

- Managed scenarios where questions are not provided or an empty array is passed to maintain functionality.
- Handled overflow in the questions carousel to ensure a seamless user experience.
- Automatically disabled navigation buttons when reaching limits to prevent unintended actions.
- While developing, found that the question index was not restting back to first question, when we change the candidate.