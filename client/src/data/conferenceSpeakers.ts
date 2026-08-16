export interface ConferenceSpeaker {
  id: number;
  name: string;
  title: string;
  role: string;
  image: string;
  bio: string;
}

// Placeholder image paths - replace with actual speaker photos later
const PLACEHOLDER_IMAGE = '/images/speakers/';

const conferenceSpeakers: ConferenceSpeaker[] = [
  {
    id: 1,
    name: 'Dr. Yohannes Yimer',
    title: 'Keynote Speaker',
    role: 'Country Director, SIM Nigeria',
    image: `${PLACEHOLDER_IMAGE}yohannes-yimer.jpg`,
    bio: "Dr. Yohannes Yimer is an Ethiopian family physician, missionary, and mission leader currently serving as Country Director of SIM Nigeria. His journey has taken him from clinical medicine into cross-cultural ministry, leadership development, and mission mobilization. He is passionate about helping churches discover their role in God's global mission and encouraging African believers to participate in reaching least-reached peoples. His ministry focuses on leadership development, cross-cultural mission, healthcare ministry, and mobilizing churches toward God's global mission, particularly among least-reached peoples in Northern Nigeria and the wider Sahel region. Dr. Yohannes is married to Bizualem, and they are blessed with two children, Barkot and Hasset.",
  },
  {
    id: 2,
    name: 'Dr. Susan Sunalini Paul',
    title: 'Conference Speaker',
    role: 'Physician, Psychologist & Missionary',
    image: `${PLACEHOLDER_IMAGE}susan-sunalini-paul.jpg`,
    bio: "Dr. Susan Sunalini Remo Paul is a physician, missionary, Certified Christian Psychologist, and disciple-maker passionate about holistic healing of body, mind, and spirit. She holds an MBBS, MD in Pathology, and PGDFM. Since 2008, she has served in cross-cultural ministry among tribal communities in southern Odisha, India, providing medical care, health education, discipleship, and community development. Married to Remo Paul, a TCK, she is raising four TCK sons and brings lived experience of missionary family life. She mentors young people, leads annual Bible camps for 800 children, and speaks on holistic health, Christian psychology, TCKs, and family life.",
  },
  {
    id: 3,
    name: 'Ragland Remo Paul',
    title: 'Conference Speaker',
    role: 'National Team Leader, Interserve India',
    image: `${PLACEHOLDER_IMAGE}ragland-remo-paul.jpg`,
    bio: "Ragland Remo Paul is a Christian mission leader, social worker, and advocate for Third Culture Kids and Missionary Kids with over 28 years of experience in missions, community development, and leadership. He currently serves as National Team Leader with Interserve India. Previously, he was Executive Secretary of Reaching Hand Society for 17 years. Remo holds an MA in Social Work and an Executive Program in Church and NGO Management. A TCK himself, he mentors young Christians and has raised four TCK/MK sons with his wife, Dr. Susan. His passion is to see TCKs/MKs thrive spiritually and discover God's unique purpose for their cross-cultural lives.",
  },
  {
    id: 4,
    name: 'Ruth Van Reken',
    title: 'Conference Speaker',
    role: 'Co-author, Third Culture Kids',
    image: `${PLACEHOLDER_IMAGE}ruth-van-reken.jpg`,
    bio: "Ruth Van Reken is a second-generation Third Culture Kid and mother of three adult TCKs. She is co-author of Third Culture Kids: Growing Up Among Worlds, 3rd ed. and author of Letters Never Sent, a personal journal exploring the long-term impact of a cross-cultural childhood. For over 30 years she traveled globally speaking on the impact of mobility on individuals, families, and societies. She is co-founder and past chair of Families in Global Transition (FGT), and has contributed chapters to Strangers at Home, Unrooted Childhoods, and Writing Out of Limbo. In 2019 she received an Hon. Litt.D from Wheaton College. Ruth now serves as Chairperson of the Governing Board of Safe Passage Across Networks (SPAN) and lives in Indianapolis, IN with her husband, David.",
  },
  {
    id: 5,
    name: 'Andrew Gwaivangmin',
    title: 'Conference Speaker',
    role: 'Executive Secretary, NEMA',
    image: `${PLACEHOLDER_IMAGE}andrew-gwaivangmin.jpg`,
    bio: "Andrew Gwaivangmin is a seasoned development practitioner, organizational consultant, and missions leader with over 30 years of experience in strategic leadership, capacity building, and humanitarian response across Africa. He currently serves as Executive Secretary/Chief Executive Officer of the Nigeria Evangelical Missions Association (NEMA), where he mobilizes the Church for missions and strengthens partnerships for sustainable growth. Andrew is a missionary kid, the first of 8 children of Rev. Iliya and Mrs. Hanatu Gwaivangmin, who served over 40 years in frontier communities. He has worked with Tearfund, World Renew, Oxfam, Global Fund, DFID, and IRMA. He is married to Christiana, has three adult children, and is based in Jos, Nigeria.",
  },
  {
    id: 6,
    name: 'Rev. Ode Agabi',
    title: 'Conference Speaker',
    role: 'Missionary, SIM West Africa',
    image: `${PLACEHOLDER_IMAGE}ode-agabi.jpg`,
    bio: "Rev. Ode Agabi is a minister with the Evangelical Church Winning All (ECWA) and currently serves with the SIM West African Missions Office as a missionary. He is a graduate of the University of Jos and ECWA Theological Seminary Jos, and brings about a decade of experience in cross-cultural missions. Rev. Ode is passionate about reaching people with the Gospel and equipping believers for mission. He is married to Jennifer, and together they are blessed with two children. The Agabi family continues to serve faithfully in ministry and missions across West Africa.",
  },
  {
    id: 7,
    name: 'Linda Atue Ogunshola',
    title: 'Conference Speaker',
    role: 'Trainer & Member Care Facilitator',
    image: `${PLACEHOLDER_IMAGE}linda-ogunshola.jpg`,
    bio: "Linda Atue Ogunshola gave her life to Christ as a teenager on campus in 1979. She answered the call to missions in 1984/85 and has served in cross-cultural missions for four decades, with half of that time in rural mission service. A wife and mother of four adult children raised on the mission field, she now serves as a trainer and member care facilitator with Christ's Disciples' Mission in Nigeria. She holds a PhD in Intercultural Leadership and Administration. Linda is passionate about raising a next-generation that loves and fears the Lord. She also leads Hope and Skills Foundation (HASF), mobilizing Community Bible Clubs, school fellowships, and training children/teen workers. She lives in Ibadan with her husband, James M. Ogunshola.",
  },
  {
    id: 8,
    name: 'Pastor Ray Mensa Mensah',
    title: 'Conference Speaker',
    role: 'Executive Director, OneWay Africa',
    image: `${PLACEHOLDER_IMAGE}ray-mensa-mensah.jpg`,
    bio: "Pastor Ray Mensa Mensah is a passionate lover of Christ with a heart for evangelism, missions, disciple-making, revival, and leadership development. He serves as Executive Director of OneWay Africa, Director of the Livingstone School of Missions, and President of the Africa Missions Association (AfMA). He previously served as a missionary in northern Botswana and as President of the Ghana Evangelical Missions Association (GEMA). With 32 years in missions, he is also on faculty at the Daniel Institute, lecturing in Evangelism & Missions and Church Planting. A sought-after speaker across Ghana, Africa, and globally, he is married to Cynthia and they have two adult children.",
  },
  {
    id: 9,
    name: 'Bakari Ibrahim Bunga',
    title: 'Conference Speaker',
    role: 'Retired EMS Missionary',
    image: `${PLACEHOLDER_IMAGE}bakari-ibrahim-bunga.jpg`,
    bio: "Bakari Ibrahim Bunga was born March 15, 1956 in Balanga, Gombe State, Nigeria. Raised in a Muslim home, he gave his life to Christ in 1975 and answered the call to ministry in 1978. He trained at ECWA Bible School, Kagoro. He served faithfully as an EMS Missionary for 40 years, 1983-2023, as a Field Missionary in the Core North, Kano, Katsina, and Sokoto. He established 33 mission schools and held key leadership roles including Outreach Coordinator, Schools Services Coordinator, and Administrative Director of EMS-ECWA. He is married to Prof. Lami B. Ibrahim, Head of Missions at JETS. In retirement, he continues serving on ministry boards.",
  },
];

export default conferenceSpeakers;
