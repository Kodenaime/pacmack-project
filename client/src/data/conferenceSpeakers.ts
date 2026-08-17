export interface ConferenceSpeaker {
  id: number;
  name: string;
  title: string;
  role: string;
  bio: string;
  type: 'speaker' | 'guest';
  image?: string;
}

import bakari from '../assets/2026-speakers/bakari.jpeg'
import dupe from '../assets/2026-speakers/dupe.jpg'
import andrew from '../assets/2026-speakers/andrew.jpeg'
import linda from '../assets/2026-speakers/linda.jpeg'
import mindy from '../assets/2026-speakers/mindy.jpeg'
import guma from '../assets/2026-speakers/guma.jpeg'
import bret from   '../assets/2026-speakers/bret.jpeg'



const conferenceSpeakers: ConferenceSpeaker[] = [
  {
    id: 1,
    name: 'Dr. Susan Sunalini Paul',
    title: 'Conference Speaker',
    role: 'Physician, Psychologist & Missionary',
    bio: "Dr. Susan Sunalini Remo Paul is a physician, missionary, Certified Christian Psychologist, and disciple-maker passionate about holistic healing of body, mind, and spirit. She holds an MBBS, MD in Pathology, and PGDFM. Since 2008, she has served in cross-cultural ministry among tribal communities in southern Odisha, India, providing medical care, health education, discipleship, and community development. Married to Remo Paul, a TCK, she is raising four TCK sons and brings lived experience of missionary family life. She mentors young people, leads annual Bible camps for 800 children, and speaks on holistic health, Christian psychology, TCKs, and family life.",
    type: 'speaker'
  },
  {
    id: 2,
    name: 'Andrew G',
    title: 'Conference Speaker',
    role: 'Executive Secretary, NEMA',
    bio: "Andrew Gwaivangmin is a seasoned development practitioner, organizational consultant, and missions leader with over 30 years of experience in strategic leadership, capacity building, and humanitarian response across Africa. He currently serves as Executive Secretary/Chief Executive Officer of the Nigeria Evangelical Missions Association (NEMA), where he mobilizes the Church for missions and strengthens partnerships for sustainable growth. Andrew is a missionary kid, the first of 8 children of Rev. Iliya and Mrs. Hanatu Gwaivangmin, who served over 40 years in frontier communities.",
    type: 'speaker',
    image: andrew,
  },
  {
    id: 3,
    name: 'Ray Mensah',
    title: 'Conference Speaker',
    role: 'Executive Director, OneWay Africa',
    bio: "Pastor Ray Mensa Mensah is a passionate lover of Christ with a heart for evangelism, missions, disciple-making, revival, and leadership development. He serves as Executive Director of OneWay Africa, Director of the Livingstone School of Missions, and President of the Africa Missions Association (AfMA). He previously served as a missionary in northern Botswana and as President of the Ghana Evangelical Missions Association (GEMA). With 32 years in missions, he is also on faculty at the Daniel Institute, lecturing in Evangelism & Missions and Church Planting.",
    type: 'speaker'
  },
  {
    id: 4,
    name: 'Chris Beetham',
    title: 'Conference Speaker',
    role: 'Missionary & Educator',
    bio: "Chris Beetham serves as a missionary educator and scholar. He and his wife Mindy lived and worked with SIM in Addis Ababa from 2005 to 2015, teaching, equipping, and mentoring Christian leaders across Africa.",
    type: 'speaker'
  },
  {
    id: 19,
    name: 'Mindy Beetham',
    title: 'Conference Speaker',
    role: 'TCK Coordinator, SIM International',
    bio: "Mindy Beetham is SIM International's TCK Coordinator giving her the joy and honor of working with SIM's 70 TCK coordinators who work with SIM families in offices in 70 countries. She is educated as a teacher. She and her husband lived and worked with SIM in Addis Ababa from 2005-2015. She has been in her current role since 2017. She is also mom to five grown children. And mostly gratefully a daughter of the Most High King.",
    type: 'speaker',
    image: mindy,
  },
  {
    id: 5,
    name: 'Dupe Kashimawo',
    title: 'Conference Speaker',
    role: 'Member Care Specialist & Advocate',
    bio: "Dupe Kashimawo is an active advocate and speaker on TCK and MK topics, offering key pastoral care and support to help families navigate transitions smoothly.",
    type: 'speaker',
    image: dupe,
  },
  {
    id: 6,
    name: 'Yohannes Yimer',
    title: 'Conference Speaker',
    role: 'Country Director, SIM Nigeria',
    bio: "Dr. Yohannes Yimer is an Ethiopian family physician, missionary, and mission leader currently serving as Country Director of SIM Nigeria. His journey has taken him from clinical medicine into cross-cultural ministry, leadership development, and mission mobilization.",
    type: 'speaker'
  },
  {
    id: 7,
    name: 'Emmanuel Oladipo',
    title: 'Conference Speaker',
    role: 'Veteran Mission Leader',
    bio: "Emmanuel Oladipo is a veteran mission leader and speaker with decades of experience in mobilizing and supporting cross-cultural Christian workers and their families across the continent of Africa.",
    type: 'speaker'
  },
  {
    id: 8,
    name: 'George Gumah',
    title: 'Conference Speaker',
    role: 'MK Caregiver Ghana & Member Care Coordinator',
    bio: "George Gumah is a highly motivated and experienced advocate for children and vulnerable populations across Ghana and West Africa. With a deep understanding of the challenges faced by African children, George is committed to ensuring their safety, spiritual growth, and overall well-being. His extensive background includes four years of campus ministry, 14 years of full-time mission service, and numerous years dedicated to children's ministry. He currently serves as the Research, Field Ministries, and Member Care Coordinator for Pioneers-Africa, a Child Safety Officer (interviewer) and International Field Representative with Operation Christmas Child (Samaritan's Purse), and Research Director for the Ghana Evangelical Mission Association (GEMA). Inspired by his own positive experiences with childhood ministry, George is passionate about seeing children thrive and feel loved and cared for in their communities. He is married to Joanna Des-bordes, and they have two children.",
    type: 'speaker',
    image: guma,
  },
  {
    id: 9,
    name: 'Bakari Bunka',
    title: 'Conference Speaker',
    role: 'Retired EMS Missionary',
    bio: "Bakari Ibrahim Bunga served faithfully as an EMS Missionary for 40 years, 1983-2023, as a Field Missionary in the Core North, Kano, Katsina, and Sokoto. He established 33 mission schools and held key leadership roles including Outreach Coordinator, Schools Services Coordinator, and Administrative Director.",
    type: 'speaker',
    image: bakari,
  },
  {
    id: 10,
    name: 'Linda Oladipo',
    title: 'Conference Speaker',
    role: 'Member Care Facilitator',
    bio: "Linda Oladipo is a dedicated trainer, mother, and member care specialist helping missionary families navigate transition and cross-cultural challenges.",
    type: 'speaker',
    image: linda,
  },
  {
    id: 11,
    name: 'Rev. Jeremiah Gado',
    title: 'Conference Guest',
    role: 'Christian Mission Leader',
    bio: "Rev. Jeremiah Gado is a prominent Christian leader and speaker, supporting mission families and cross-cultural initiatives.",
    type: 'guest'
  },
  {
    id: 12,
    name: 'Ruth Van Reken',
    title: 'Conference Guest',
    role: 'Co-author, Third Culture Kids',
    bio: "Ruth Van Reken is a second-generation Third Culture Kid and mother of three adult TCKs. She is co-author of Third Culture Kids: Growing Up Among Worlds, 3rd ed. and author of Letters Never Sent, a personal journal exploring the long-term impact of a cross-cultural childhood.",
    type: 'guest'
  },
  {
    id: 13,
    name: 'John Backlay',
    title: 'Conference Guest',
    role: 'TCK Consultant',
    bio: "John Backlay is an experienced speaker and counselor, passionate about TCK care and missionary family dynamics.",
    type: 'guest'
  },
  {
    id: 14,
    name: 'Bret Taylor',
    title: 'Conference Guest',
    role: 'Executive Director, Interaction International',
    bio: "Bret Taylor is the Executive Director of Interaction International and has been working with Third Culture Kids since 1999. He served as a chaplain at West Nairobi School in Kenya and later built the MK program at JAARS in North Carolina into a thriving international program. Bret is the creator of the Adaptable TCK Model and co-author of Setting the Standard: Standards of Excellence for TCK Care. He and his wife Mindy have three kids. He loves tackling home projects, traveling, and helping TCKs process their journey.",
    type: 'guest',
    image: bret,
  },
  {
    id: 15,
    name: 'Paul Dyke',
    title: 'Conference Guest',
    role: 'Cross-cultural Consultant',
    bio: "Paul Dyke is a dedicated missionary and speaker assisting families in transition and cross-cultural settings.",
    type: 'guest'
  },
  {
    id: 16,
    name: 'Remo Paul',
    title: 'Conference Guest',
    role: 'National Team Leader, Interserve India',
    bio: "Ragland Remo Paul is a Christian mission leader, social worker, and advocate for Third Culture Kids and Missionary Kids with over 28 years of experience in missions, community development, and leadership.",
    type: 'guest'
  },
  {
    id: 17,
    name: 'Eddie ....',
    title: 'Conference Guest',
    role: 'Member Caregiver',
    bio: "Eddie is a missionary caregiver helping families connect, learn, and grow together on the mission field.",
    type: 'guest'
  },
  {
    id: 18,
    name: 'Belinda .....',
    title: 'Conference Guest',
    role: 'TCK Supporter',
    bio: "Belinda is an experienced member care facilitator supporting missionary kids and caregivers.",
    type: 'guest'
  }
];

export default conferenceSpeakers;
