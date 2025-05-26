'use client'

import { GradesTable } from './components/GradesTable';
import { gradesData } from './data';

export default function GradesPage() {
    return (
        <div className="space-y-6">
            {gradesData.map((g) => (
                <GradesTable
                    key={g.schoolYear}
                    year={g.schoolYear}
                    grade={g.gradeLevel}
                    subjects={g.subjects}
                />
            ))}
        </div>
    );
}
