import SectionTitle from './SectionTitle'
import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import HotelIcon from '@mui/icons-material/Hotel'
import RepeatIcon from '@mui/icons-material/Repeat'
import Typography from '@mui/material/Typography'
import BusinessSharpIcon from '@mui/icons-material/BusinessSharp'
import SchoolIcon from '@mui/icons-material/School'

const Experience = () => {
  return (
    <section className="py-20 align-element " id="experience">
      <SectionTitle text="Experience" />

      {/* Timeline for larger screens */}
      <div className="hidden lg:block">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              Jan 2023 - Apr 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'text.secondary' }} />
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'text.secondary' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Graduate Teaching & Administrative Assistant
              </Typography>
              <Typography>Georgia State University</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              Aug 2021 - Dec 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'text.secondary' }} />
              <TimelineDot color="primary" variant="outlined">
                <BusinessSharpIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'text.secondary' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Systems Engineer
              </Typography>
              <Typography>Tata Consultancy Services</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              Mar 2021 - Jun 2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'text.secondary' }} />
              <TimelineDot color="primary">
                <BusinessSharpIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'text.secondary' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Project Intern
              </Typography>
              <Typography>Tata Consultancy Services</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>

      {/* Card layout for smaller screens */}
      <div className="lg:hidden flex flex-col p-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-start  pb-4">
            <div className="w-1/3 text-gray-600 font-semibold">
              Jan 2023 - Apr 2024
            </div>
            <div className="w-2/3">
              <h3 className="text-lg font-semibold">
                Graduate Teaching & Administrative Assistant
              </h3>
              <p className="text-gray-700">Georgia State University</p>
            </div>
          </div>

          <div className="flex items-start  pb-4">
            <div className="w-1/3 text-gray-600 font-semibold">
              Aug 2021 - Dec 2022
            </div>
            <div className="w-2/3">
              <h3 className="text-lg font-semibold">Systems Engineer</h3>
              <p className="text-gray-700">Tata Consultancy Services</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-1/3 text-gray-600 font-semibold">
              Mar 2021 - Jun 2021
            </div>
            <div className="w-2/3">
              <h3 className="text-lg font-semibold">Project Intern</h3>
              <p className="text-gray-700">Tata Consultancy Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
