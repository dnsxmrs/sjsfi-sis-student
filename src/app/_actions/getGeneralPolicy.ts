'use server'

import { GeneralPolicy } from '@/models/GeneralPolicy'

export async function getGeneralPolicy(): Promise<GeneralPolicy> {
    // delay for 3 seconds
    // await new Promise(resolve => setTimeout(resolve, 3000));

    // In a real application, this would fetch from a database
    return {
        title: 'General Policy and Guidelines',
        description: `The following policies and guidelines are established to ensure a safe, productive, and respectful learning environment for all members of our school community.

1. Attendance and Punctuality
Students are expected to attend all classes regularly and arrive on time. Absences must be properly documented with valid reasons. Excessive absences may result in academic penalties or disciplinary action.

2. Academic Integrity
All students must maintain the highest standards of academic honesty. Plagiarism, cheating, and other forms of academic dishonesty will not be tolerated and may result in severe consequences including failing grades and disciplinary action.

3. Code of Conduct
Students are expected to behave respectfully towards teachers, staff, and fellow students. Bullying, harassment, and disruptive behavior will not be tolerated. The school promotes a culture of mutual respect and understanding.

4. Dress Code
Students must adhere to the prescribed school uniform and dress code. Neat and appropriate appearance is required at all times. The dress code aims to maintain a professional learning environment.

5. Use of Technology
Electronic devices must be used responsibly and only for educational purposes during class hours. Unauthorized use of devices may result in confiscation and disciplinary action.

6. Safety and Security
Students must follow all safety protocols and emergency procedures. Any safety concerns should be reported immediately to school authorities. The school maintains a zero-tolerance policy for violence and dangerous behavior.

7. Communication
Parents and guardians are encouraged to maintain regular communication with teachers and school administration. Important announcements and updates will be communicated through official school channels.

8. Assessment and Grading
Academic performance is evaluated through various assessment methods. Grading policies are designed to be fair and transparent. Students are encouraged to seek clarification on their grades and academic progress.`,
        lastUpdated: 'April 15, 2024'
    }
}
