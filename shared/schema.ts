import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const careerInsights = pgTable("career_insights", {
  id: serial("id").primaryKey(),
  podcast_number: integer("podcast_number").notNull(),
    podcast_title: text("podcast_title").notNull(),
  podcast_link: text("podcast_link").notNull(),
  interviewee_name: text("interviewee_name").notNull(),
  industry_sectors: text("industry_sectors").array().notNull(),
  transcript_excerpt_number: integer("transcript_excerpt_number").notNull(),
  transcript_excerpt_text: text("transcript_excerpt_text").notNull(),
  quote: text("quote").notNull(),
  initial_code: text("initial_code").notNull(),
});

export const insertCareerInsightSchema = createInsertSchema(careerInsights);

export type InsertCareerInsight = z.infer<typeof insertCareerInsightSchema>;
export type CareerInsight = typeof careerInsights.$inferSelect;

// This is the default dataset to use until the user provides their own
export const defaultCareerInsights: InsertCareerInsight[] = [
  {
    "podcast_number": 98,
    "podcast_title": "Andrea Mollenauer | Chef Instructor Cabrillo College Culinary",
    "podcast_link": "https://soundcloud.com/what-to-be/andrea-mollenauer",
    "interviewee_name": "Andrea Mollenauer",
    "industry_sectors": [
      "Hospitality",
      "Tourism",
      "Recreation"
    ],
    "transcript_excerpt_number": 4,
    "transcript_excerpt_text": "Interviewer  1:46   Very cool. And so you said you have been a chef for 14 years?   Andrea Mollenauer  1:50   Well, I've been a chef for many more years than that. I graduated the culinary program at Cabrillo back in the early 2000s. So about 20 years ago, I was becoming a chef in the program myself and went off and did my thing as a caterer. I have had a catering business for 16 years now. Started teaching slowly here and there. And then now I would say that teaching is my primary job rather than my catering.",
    "quote": "I have had a catering business for 16 years now. Started teaching slowly here and there. And then now I would say that teaching is my primary job rather than my catering.",
    "initial_code": "Evolving Career"
  },
  {
    "podcast_number": 98,
    "podcast_title": "Andrea Mollenauer | Chef Instructor Cabrillo College Culinary",
    "podcast_link": "https://soundcloud.com/what-to-be/andrea-mollenauer",
    "interviewee_name": "Andrea Mollenauer",
    "industry_sectors": [
      "Hospitality",
      "Tourism",
      "Recreation"
    ],
    "transcript_excerpt_number": 6,
    "transcript_excerpt_text": "Interviewer  2:33   Congratulations on that. And I think it's great that they have you as an instructor as a grad of the program. Do you mind telling our listeners more about the program?  Andrea Mollenauer  2:41   Oh sure. So the culinary arts program that Cabrillo offers everything from foundational culinary instruction in the form of its beginning courses, both lecture based and lab based all the way up to advanced kind of restaurant style service. And, you know, there's also there's also a baking department, there's also a wine section. And so you can get a variety of different certificates and associate's degrees. And there's what I like about it myself compared to other programs in the region is, I love that it has a hands on opportunities for the students because we also run labs that actually provide food to the public. So a little bit different during the pandemic situation right now. But typically, we have a beginning lunch restaurant and an advanced dinner restaurant and a full catering program that caters parties and events. You know a lot of weddings, at the historic Sesnon house on campus at Cabrillo. And right now we still are operating some select courses on campus with kind of like a rigorous protocol for safety. But we were still doing some on campus courses. And so we're doing takeout for people to come and pick up our food instead of the restaurant since the restaurant at this time is not considered safe.",
    "quote": "...I love that it has hands-on opportunities for the students because we also run labs that actually provide food to the public. So a little bit different during the pandemic situation right now. But typically, we have a beginning lunch restaurant and an advanced dinner restaurant and a full catering program that caters parties and events.",
    "initial_code": "Hands-on experience"
  },
  {
    "podcast_number": 98,
    "podcast_title": "Andrea Mollenauer | Chef Instructor Cabrillo College Culinary",
    "podcast_link": "https://soundcloud.com/what-to-be/andrea-mollenauer",
    "interviewee_name": "Andrea Mollenauer",
    "industry_sectors": [
      "Hospitality",
      "Tourism",
      "Recreation"
    ],
    "transcript_excerpt_number": 9,
    "transcript_excerpt_text": "Interviewer  6:01   That's cool. And you talked about that the grads of the program get certificates and with those certificates, does that put the students or the grads in a good position to land jobs in the kitchen out there.  Andrea Mollenauer  6:13   I like to think so. A degree in anything doesn't guarantee you a job. However, in a really competitive industry like food and culinary where people can climb that ladder within a restaurant from busser or dishwasher all the way up to prep cook and sous chef, I would say that a degree from a program like Cabrillo could, for example, give them a little bit of a leg up a little bit. Perhaps if more practice technique, I think it's also going to depend heavily on the student and the students commitment to a really hard industry like culinary arts. And if it's right for them, I think a degree is a really great way to kind of jumpstart that pathway for them, it's often going to be that people need to start low in an organization like a restaurant and build their way up and show what you know, show what they know and practice technique based on what that restaurant specializes in. But it's really creating a foundation for them with the certificate or the degree you know, the all of the foundational work that we practice in the program is kind of like the building blocks for them, in my opinion.",
    "quote": "A degree from a program like Cabrillo could, for example, give them a little bit of a leg up... But it's really creating a foundation for them with the certificate or the degree you know, the all of the foundational work that we practice in the program is kind of like the building blocks for them.",
    "initial_code": "Foundation of Skills"
  },
  {
    "podcast_number": 98,
    "podcast_title": "Andrea Mollenauer | Chef Instructor Cabrillo College Culinary",
    "podcast_link": "https://soundcloud.com/what-to-be/andrea-mollenauer",
    "interviewee_name": "Andrea Mollenauer",
    "industry_sectors": [
      "Hospitality",
      "Tourism",
      "Recreation"
    ],
    "transcript_excerpt_number": 9,
    "transcript_excerpt_text": "Interviewer  6:01   That's cool. And you talked about that the grads of the program get certificates and with those certificates, does that put the students or the grads in a good position to land jobs in the kitchen out there.  Andrea Mollenauer  6:13   I like to think so. A degree in anything doesn't guarantee you a job. However, in a really competitive industry like food and culinary where people can climb that ladder within a restaurant from busser or dishwasher all the way up to prep cook and sous chef, I would say that a degree from a program like Cabrillo could, for example, give them a little bit of a leg up a little bit. Perhaps if more practice technique, I think it's also going to depend heavily on the student and the students commitment to a really hard industry like culinary arts. And if it's right for them, I think a degree is a really great way to kind of jumpstart that pathway for them, it's often going to be that people need to start low in an organization like a restaurant and build their way up and show what you know, show what they know and practice technique based on what that restaurant specializes in. But it's really creating a foundation for them with the certificate or the degree you know, the all of the foundational work that we practice in the program is kind of like the building blocks for them, in my opinion.",
    "quote": "People need to start low in an organization like a restaurant and build their way up and show what you know, show what they know and practice technique based on what that restaurant specializes in.",
    "initial_code": "Starting from the Bottom"
  },
  {
    "podcast_number": 98,
    "podcast_title": "Andrea Mollenauer | Chef Instructor Cabrillo College Culinary",
    "podcast_link": "https://soundcloud.com/what-to-be/andrea-mollenauer",
    "interviewee_name": "Andrea Mollenauer",
    "industry_sectors": [
      "Hospitality",
      "Tourism",
      "Recreation"
    ],
    "transcript_excerpt_number": 9,
    "transcript_excerpt_text": "Interviewer  6:01   That's cool. And you talked about that the grads of the program get certificates and with those certificates, does that put the students or the grads in a good position to land jobs in the kitchen out there.  Andrea Mollenauer  6:13   I like to think so. A degree in anything doesn't guarantee you a job. However, in a really competitive industry like food and culinary where people can climb that ladder within a restaurant from busser or dishwasher all the way up to prep cook and sous chef, I would say that a degree from a program like Cabrillo could, for example, give them a little bit of a leg up a little bit. Perhaps if more practice technique, I think it's also going to depend heavily on the student and the students commitment to a really hard industry like culinary arts. And if it's right for them, I think a degree is a really great way to kind of jumpstart that pathway for them, it's often going to be that people need to start low in an organization like a restaurant and build their way up and show what you know, show what they know and practice technique based on what that restaurant specializes in. But it's really creating a foundation for them with the certificate or the degree you know, the all of the foundational work that we practice in the program is kind of like the building blocks for them, in my opinion.",
    "quote": "It's also going to depend heavily on the student and the student's commitment to a really hard industry like culinary arts",
    "initial_code": "Commitment and Hard Work"
  },
  {
    "podcast_number": 98,
    "podcast_title": "Andrea Mollenauer | Chef Instructor Cabrillo College Culinary",
    "podcast_link": "https://soundcloud.com/what-to-be/andrea-mollenauer",
    "interviewee_name": "Andrea Mollenauer",
    "industry_sectors": [
      "Hospitality",
      "Tourism",
      "Recreation"
    ],
    "transcript_excerpt_number": 13,
    "transcript_excerpt_text": "Interviewer  11:52   Yeah. And it seems like it's working so far, and that you guys are doing the best that you can to make it stay that way. So good job. And I would imagine that your duties and responsibilities have changed, maybe somewhat and, and I know some of this, we were talking about before the interview that you're making some like construction videos that will just serve as like foundation material for your class going forward, which I think is great.   Andrea Mollenauer  12:14   Yeah all my classes actually and teaching in the high school setting as well. And the high school culinary program that I teach is all online, none of it has come back to in person education. And so a lot of the slide decks and the instructional videos and all of the photo documents that I'm putting together for the students I feel like are going to be really great resources that I can use in the future, even if we do come back in person, and they can refer to them at home and they're practicing their knife skills at home or, you know, I can use them to send out as pre learning materials. So they can be like a little bit up on the material before coming into class and practicing the techniques. So I'm just loving putting together all of the new educational material. It's a lot of work. Like I'm not gonna lie, I think you said it earlier. It's a stress on teachers as well, that is unprecedented. But I'm actually really loving the results. Like the results are that I'm coming up with tons of other ways of teaching what I've been teaching for many, many years, and I'm coming up with a ton of foundational material in a ways that I never would have had time or made the time to do before. And so I think that when all this is said and done, it sounds crazy, but it's going to make me a better teacher. And so there is a small nugget of positivity here.",
    "quote": "It's a lot of work. Like I'm not gonna lie... it's a stress on teachers as well, that is unprecedented... But I'm actually really loving the results. Like the results are that I'm coming up with tons of other ways of teaching what I've been teaching for many, many years, and I'm coming up with a ton of foundational material in a ways that I never would have had time or made the time to do before",
    "initial_code": "Embrace Change"
  },
  {
    "podcast_number": 98,
    "podcast_title": "Andrea Mollenauer | Chef Instructor Cabrillo College Culinary",
    "podcast_link": "https://soundcloud.com/what-to-be/andrea-mollenauer",
    "interviewee_name": "Andrea Mollenauer",
    "industry_sectors": [
      "Hospitality",
      "Tourism",
      "Recreation"
    ],
    "transcript_excerpt_number": 13,
    "transcript_excerpt_text": "Interviewer  11:52   Yeah. And it seems like it's working so far, and that you guys are doing the best that you can to make it stay that way. So good job. And I would imagine that your duties and responsibilities have changed, maybe somewhat and, and I know some of this, we were talking about before the interview that you're making some like construction videos that will just serve as like foundation material for your class going forward, which I think is great.   Andrea Mollenauer  12:14   Yeah all my classes actually and teaching in the high school setting as well. And the high school culinary program that I teach is all online, none of it has come back to in person education. And so a lot of the slide decks and the instructional videos and all of the photo documents that I'm putting together for the students I feel like are going to be really great resources that I can use in the future, even if we do come back in person, and they can refer to them at home and they're practicing their knife skills at home or, you know, I can use them to send out as pre learning materials. So they can be like a little bit up on the material before coming into class and practicing the techniques. So I'm just loving putting together all of the new educational material. It's a lot of work. Like I'm not gonna lie, I think you said it earlier. It's a stress on teachers as well, that is unprecedented. But I'm actually really loving the results. Like the results are that I'm coming up with tons of other ways of teaching what I've been teaching for many, many years, and I'm coming up with a ton of foundational material in a ways that I never would have had time or made the time to do before. And so I think that when all this is said and done, it sounds crazy, but it's going to make me a better teacher. And so there is a small nugget of positivity here.",
    "quote": "\u201cI'm just loving putting together all of the new educational material... I'm coming up with tons of other ways of teaching what I've been teaching for many, many years, and I'm coming up with a ton of foundational material in a ways that I never would have had time or made the time to do before.\u201d,",
    "initial_code": "Lifelong Learning"
  },
  {
    "podcast_number": 98,
    "podcast_title": "Andrea Mollenauer | Chef Instructor Cabrillo College Culinary",
    "podcast_link": "https://soundcloud.com/what-to-be/andrea-mollenauer",
    "interviewee_name": "Andrea Mollenauer",
    "industry_sectors": [
      "Hospitality",
      "Tourism",
      "Recreation"
    ],
    "transcript_excerpt_number": 16,
    "transcript_excerpt_text": "Interviewer  14:10   Andre, do you mind sharing some of your most memorable projects that you've been involved with with your long career as a chef?  Andrea Mollenauer  14:17   Well, I would say I don't know if this is a project but one of my most exciting recent occurrences was just getting hired and you know, trusted to be an instructor at Cabrillo in the culinary department when I was originally you know, a graduate of the program. I feel like that's just like my full circle moment where I'm just so excited to be there. So that to me feels like you know, a testament to some of the education and food stuff that I've done over the years and I love to put students in the forefront of what we're doing. You know, like it may not be their first place like going out and being in front of the public but I've found opportunities over the years to show them how to be good caterers by finding events that we can cater in the community and doing like Chef versus chef challenges where the students all came up with different recipes. And we had this big event is big fundraiser where the public was invited to come and test and taste and grade all of their work. And it was like this fun competition between them. And I think that the ways in which I've taken the teaching out of the classroom has been some of my biggest highlights. Over the years as a food educator, I've loved all of the programs, the luncheons, the caterings. And the times when the students are given props by the community for like feeding them and providing really good food, it just puts a huge smile on their face. And it makes their learning like meaningful, I guess.",
    "quote": "...one of my most exciting recent occurrences was just getting hired and you know, trusted to be an instructor at Cabrillo in the culinary department when I was originally you know, a graduate of the program. I feel like that's just like my full circle moment where I'm just so excited to be there.",
    "initial_code": "Find full circle moments"
  },
  {
    "podcast_number": 98,
    "podcast_title": "Andrea Mollenauer | Chef Instructor Cabrillo College Culinary",
    "podcast_link": "https://soundcloud.com/what-to-be/andrea-mollenauer",
    "interviewee_name": "Andrea Mollenauer",
    "industry_sectors": [
      "Hospitality",
      "Tourism",
      "Recreation"
    ],
    "transcript_excerpt_number": 16,
    "transcript_excerpt_text": "Interviewer  14:10   Andre, do you mind sharing some of your most memorable projects that you've been involved with with your long career as a chef?  Andrea Mollenauer  14:17   Well, I would say I don't know if this is a project but one of my most exciting recent occurrences was just getting hired and you know, trusted to be an instructor at Cabrillo in the culinary department when I was originally you know, a graduate of the program. I feel like that's just like my full circle moment where I'm just so excited to be there. So that to me feels like you know, a testament to some of the education and food stuff that I've done over the years and I love to put students in the forefront of what we're doing. You know, like it may not be their first place like going out and being in front of the public but I've found opportunities over the years to show them how to be good caterers by finding events that we can cater in the community and doing like Chef versus chef challenges where the students all came up with different recipes. And we had this big event is big fundraiser where the public was invited to come and test and taste and grade all of their work. And it was like this fun competition between them. And I think that the ways in which I've taken the teaching out of the classroom has been some of my biggest highlights. Over the years as a food educator, I've loved all of the programs, the luncheons, the caterings. And the times when the students are given props by the community for like feeding them and providing really good food, it just puts a huge smile on their face. And it makes their learning like meaningful, I guess.",
    "quote": "The times when the students are given props by the community for like feeding them and providing really good food, it just puts a huge smile on their face. And it makes their learning like meaningful, I guess.",
    "initial_code": "Community validation"
  },
  {
    "podcast_number": 98,
    "podcast_title": "Andrea Mollenauer | Chef Instructor Cabrillo College Culinary",
    "podcast_link": "https://soundcloud.com/what-to-be/andrea-mollenauer",
    "interviewee_name": "Andrea Mollenauer",
    "industry_sectors": [
      "Hospitality",
      "Tourism",
      "Recreation"
    ],
    "transcript_excerpt_number": 16,
    "transcript_excerpt_text": "Interviewer  14:10   Andre, do you mind sharing some of your most memorable projects that you've been involved with with your long career as a chef?  Andrea Mollenauer  14:17   Well, I would say I don't know if this is a project but one of my most exciting recent occurrences was just getting hired and you know, trusted to be an instructor at Cabrillo in the culinary department when I was originally you know, a graduate of the program. I feel like that's just like my full circle moment where I'm just so excited to be there. So that to me feels like you know, a testament to some of the education and food stuff that I've done over the years and I love to put students in the forefront of what we're doing. You know, like it may not be their first place like going out and being in front of the public but I've found opportunities over the years to show them how to be good caterers by finding events that we can cater in the community and doing like Chef versus chef challenges where the students all came up with different recipes. And we had this big event is big fundraiser where the public was invited to come and test and taste and grade all of their work. And it was like this fun competition between them. And I think that the ways in which I've taken the teaching out of the classroom has been some of my biggest highlights. Over the years as a food educator, I've loved all of the programs, the luncheons, the caterings. And the times when the students are given props by the community for like feeding them and providing really good food, it just puts a huge smile on their face. And it makes their learning like meaningful, I guess.",
    "quote": "The ways in which I've taken the teaching out of the classroom has been some of my biggest highlights...I've loved all of the programs, the luncheons, the caterings.",
    "initial_code": "Experiential Learning"
  },
  {
    "podcast_number": 98,
    "podcast_title": "Andrea Mollenauer | Chef Instructor Cabrillo College Culinary",
    "podcast_link": "https://soundcloud.com/what-to-be/andrea-mollenauer",
    "interviewee_name": "Andrea Mollenauer",
    "industry_sectors": [
      "Hospitality",
      "Tourism",
      "Recreation"
    ],
    "transcript_excerpt_number": 18,
    "transcript_excerpt_text": "Interviewer  15:58   So, do you mind telling our students who are listening more about what you do with high schools?  Andrea Mollenauer  16:04   Sure. So I started with high schools. When I was just graduating the program, one of my instructors, one of my instructors and mentors said, Hey, there's this, there's this private high school in Santa Cruz County that is looking for a summer culinary instructor. And I think you'd fit the you know, the bill. And so I started teaching. And over the years, my teaching ability developed into kind of growing an entire high school culinary program for the County Office of Education. And that culinary program is offered to all of the County high school students, they have to register with their career and technical education counselor on campus. And then my particular program, this isn't the same in all communities, but my particular program, they come to me so I own a kitchen. And the students would come after school, they'd come off campus to my kitchen, and they would work in a professional kitchen environment. And so that culinary arts program was kind of a starting way to kind of explore if they liked food enough to make a career out of it. And you know, some of the students and actually many of the students that took my high school classes were not there for career purposes, or they realized really quickly like, well, this is not for me, but they left with this really great foundation of how to feed themselves and how to cook for themselves. And so that program actually transfers units or what we call articulates to a Cabrillo introductory course if they if they choose to come to Cabrillo culinary and use those transfer units or it's just a really great foundational course where they can learn like how to boil water and how to go off to college and not starve and a little bit more about food and sustainable agriculture and and the food world before they go off and become young foodies themselves.",
    "quote": "That culinary arts program was kind of a starting way to kind of explore if they liked food enough to make a career out of it.",
    "initial_code": "Explore early"
  },
  {
    "podcast_number": 98,
    "podcast_title": "Andrea Mollenauer | Chef Instructor Cabrillo College Culinary",
    "podcast_link": "https://soundcloud.com/what-to-be/andrea-mollenauer",
    "interviewee_name": "Andrea Mollenauer",
    "industry_sectors": [
      "Hospitality",
      "Tourism",
      "Recreation"
    ],
    "transcript_excerpt_number": 18,
    "transcript_excerpt_text": "Interviewer  15:58   So, do you mind telling our students who are listening more about what you do with high schools?  Andrea Mollenauer  16:04   Sure. So I started with high schools. When I was just graduating the program, one of my instructors, one of my instructors and mentors said, Hey, there's this, there's this private high school in Santa Cruz County that is looking for a summer culinary instructor. And I think you'd fit the you know, the bill. And so I started teaching. And over the years, my teaching ability developed into kind of growing an entire high school culinary program for the County Office of Education. And that culinary program is offered to all of the County high school students, they have to register with their career and technical education counselor on campus. And then my particular program, this isn't the same in all communities, but my particular program, they come to me so I own a kitchen. And the students would come after school, they'd come off campus to my kitchen, and they would work in a professional kitchen environment. And so that culinary arts program was kind of a starting way to kind of explore if they liked food enough to make a career out of it. And you know, some of the students and actually many of the students that took my high school classes were not there for career purposes, or they realized really quickly like, well, this is not for me, but they left with this really great foundation of how to feed themselves and how to cook for themselves. And so that program actually transfers units or what we call articulates to a Cabrillo introductory course if they if they choose to come to Cabrillo culinary and use those transfer units or it's just a really great foundational course where they can learn like how to boil water and how to go off to college and not starve and a little bit more about food and sustainable agriculture and and the food world before they go off and become young foodies themselves.",
    "quote": "Many of the students that took my high school classes were not there for career purposes, or they realized really quickly like, well, this is not for me, but they left with this really great foundation of how to feed themselves and how to cook for themselves.",
    "initial_code": "Skills beyond career"
  },
  {
    "podcast_number": 98,
    "podcast_title": "Andrea Mollenauer | Chef Instructor Cabrillo College Culinary",
    "podcast_link": "https://soundcloud.com/what-to-be/andrea-mollenauer",
    "interviewee_name": "Andrea Mollenauer",
    "industry_sectors": [
      "Hospitality",
      "Tourism",
      "Recreation"
    ],
    "transcript_excerpt_number": 20,
    "transcript_excerpt_text": "Interviewer  19:10   Okay, that's great to hear that it's still available and affordable.  Andrea Mollenauer  19:14   Well if you think about the, sorry to interrupt, but if you think about like what people think of a culinary academy, you know, the private culinary schools are $20000 or $40,000 for a certificate and at Cabrillo, you know, we have a really strong program without all of those those outrageous fees. So I think that's pretty cool.",
    "quote": "Well if you think about the, sorry to interrupt, but if you think about like what people think of a culinary academy, you know, the private culinary schools are $20000 or $40,000 for a certificate and at Cabrillo, you know, we have a really strong program without all of those those outrageous fees. So I think that's pretty cool.",
    "initial_code": "Valuable experience"
  },
  {
    "podcast_number": 98,
    "podcast_title": "Andrea Mollenauer | Chef Instructor Cabrillo College Culinary",
    "podcast_link": "https://soundcloud.com/what-to-be/andrea-mollenauer",
    "interviewee_name": "Andrea Mollenauer",
    "industry_sectors": [
      "Hospitality",
      "Tourism",
      "Recreation"
    ],
    "transcript_excerpt_number": 28,
    "transcript_excerpt_text": "Interviewer  24:51   And I think that it's one of those things that hearing about or talking about it it might turn people off to it but if they didn't know what it was and they tried to It could very well like it.  Andrea Mollenauer  25:01   Yeah, absolutely. You know, like, if you my mom used to cook me liver growing up and you know, most people won't eat liver and don't save all that from, you know, buying a whole bird or whole turkey or whatever. But if you cook liver correctly, and you saute some onions, and you throw that on there too, and you don't overcook it, it's actually quite delicious and very healthy. So I mean, part of that culinary education, I like to say, is just being super adventurous. And I tell my students like my rule is you got to taste everything twice, because the first time maybe it just wasn't done properly. Maybe the person you had it by just didn't understand the cooking process. And if you try it again, you might be surprised.",
    "quote": "...part of that culinary education, I like to say, is just being super adventurous. And I tell my students like my rule is you got to taste everything twice, because the first time maybe it just wasn't done properly. Maybe the person you had it by just didn't understand the cooking process. And if you try it again, you might be surprised.",
    "initial_code": "Adventurous exploration"
  },
  {
    "podcast_number": 98,
    "podcast_title": "Andrea Mollenauer | Chef Instructor Cabrillo College Culinary",
    "podcast_link": "https://soundcloud.com/what-to-be/andrea-mollenauer",
    "interviewee_name": "Andrea Mollenauer",
    "industry_sectors": [
      "Hospitality",
      "Tourism",
      "Recreation"
    ],
    "transcript_excerpt_number": 29,
    "transcript_excerpt_text": "Interviewer  25:42   Yeah, I think that's great advice. And speaking of advice, what advice or resources can you give the students who are interested in pursuing a career as a chef,  Andrea Mollenauer  25:51   I think a combination of education make a practice learning from you know, an instructor or a mentor, combined with really hard work is, is what I highly recommend. As a chef, there's no way you're going to get a good culinary education, walk out the door and be given, you know, a high price salary and a chef position your name on the building, I believe that a combination of learning through different methods like a culinary program, and lots of practice and play at home and and then you know, maybe an internship combined with just really hard work. The culinary industry is one of the hardest industries to be in both physically and technically and emotionally. And so I'd say that people who plug through in the industry and are willing to learn every day from in different ways, are the ones who are going to succeed in this in this industry. And that's my advice for the perfect combination of success is continued education about food and all the different new food techniques and combined with hard work.",
    "quote": "I think a combination of education make a practice learning from you know, an instructor or a mentor, combined with really hard work is, is what I highly recommend.",
    "initial_code": "Education and hard work"
  },
  {
    "podcast_number": 98,
    "podcast_title": "Andrea Mollenauer | Chef Instructor Cabrillo College Culinary",
    "podcast_link": "https://soundcloud.com/what-to-be/andrea-mollenauer",
    "interviewee_name": "Andrea Mollenauer",
    "industry_sectors": [
      "Hospitality",
      "Tourism",
      "Recreation"
    ],
    "transcript_excerpt_number": 29,
    "transcript_excerpt_text": "Interviewer  25:42   Yeah, I think that's great advice. And speaking of advice, what advice or resources can you give the students who are interested in pursuing a career as a chef,  Andrea Mollenauer  25:51   I think a combination of education make a practice learning from you know, an instructor or a mentor, combined with really hard work is, is what I highly recommend. As a chef, there's no way you're going to get a good culinary education, walk out the door and be given, you know, a high price salary and a chef position your name on the building, I believe that a combination of learning through different methods like a culinary program, and lots of practice and play at home and and then you know, maybe an internship combined with just really hard work. The culinary industry is one of the hardest industries to be in both physically and technically and emotionally. And so I'd say that people who plug through in the industry and are willing to learn every day from in different ways, are the ones who are going to succeed in this in this industry. And that's my advice for the perfect combination of success is continued education about food and all the different new food techniques and combined with hard work.",
    "quote": "The culinary industry is one of the hardest industries to be in both physically and technically and emotionally... people who plug through in the industry and are willing to learn every day from in different ways, are the ones who are going to succeed in this in this industry.",
    "initial_code": "Earning your place"
  },
  {
    "podcast_number": 98,
    "podcast_title": "Andrea Mollenauer | Chef Instructor Cabrillo College Culinary",
    "podcast_link": "https://soundcloud.com/what-to-be/andrea-mollenauer",
    "interviewee_name": "Andrea Mollenauer",
    "industry_sectors": [
      "Hospitality",
      "Tourism",
      "Recreation"
    ],
    "transcript_excerpt_number": 29,
    "transcript_excerpt_text": "Interviewer  25:42   Yeah, I think that's great advice. And speaking of advice, what advice or resources can you give the students who are interested in pursuing a career as a chef,  Andrea Mollenauer  25:51   I think a combination of education make a practice learning from you know, an instructor or a mentor, combined with really hard work is, is what I highly recommend. As a chef, there's no way you're going to get a good culinary education, walk out the door and be given, you know, a high price salary and a chef position your name on the building, I believe that a combination of learning through different methods like a culinary program, and lots of practice and play at home and and then you know, maybe an internship combined with just really hard work. The culinary industry is one of the hardest industries to be in both physically and technically and emotionally. And so I'd say that people who plug through in the industry and are willing to learn every day from in different ways, are the ones who are going to succeed in this in this industry. And that's my advice for the perfect combination of success is continued education about food and all the different new food techniques and combined with hard work.",
    "quote": "As a chef, there's no way you're going to get a good culinary education, walk out the door and be given, you know, a high price salary and a chef position your name on the building... learning through different methods like a culinary program, and lots of practice and play at home and and then you know, maybe an internship combined with just really hard work.",
    "initial_code": "Perseverance is key"
  },
  {
    "podcast_number": 98,
    "podcast_title": "Andrea Mollenauer | Chef Instructor Cabrillo College Culinary",
    "podcast_link": "https://soundcloud.com/what-to-be/andrea-mollenauer",
    "interviewee_name": "Andrea Mollenauer",
    "industry_sectors": [
      "Hospitality",
      "Tourism",
      "Recreation"
    ],
    "transcript_excerpt_number": 29,
    "transcript_excerpt_text": "Interviewer  25:42   Yeah, I think that's great advice. And speaking of advice, what advice or resources can you give the students who are interested in pursuing a career as a chef,  Andrea Mollenauer  25:51   I think a combination of education make a practice learning from you know, an instructor or a mentor, combined with really hard work is, is what I highly recommend. As a chef, there's no way you're going to get a good culinary education, walk out the door and be given, you know, a high price salary and a chef position your name on the building, I believe that a combination of learning through different methods like a culinary program, and lots of practice and play at home and and then you know, maybe an internship combined with just really hard work. The culinary industry is one of the hardest industries to be in both physically and technically and emotionally. And so I'd say that people who plug through in the industry and are willing to learn every day from in different ways, are the ones who are going to succeed in this in this industry. And that's my advice for the perfect combination of success is continued education about food and all the different new food techniques and combined with hard work.",
    "quote": "That's my advice for the perfect combination of success is continued education about food and all the different new food techniques and combined with hard work.",
    "initial_code": "Continuous learning"
  },
  {
    "podcast_number": 98,
    "podcast_title": "Andrea Mollenauer | Chef Instructor Cabrillo College Culinary",
    "podcast_link": "https://soundcloud.com/what-to-be/andrea-mollenauer",
    "interviewee_name": "Andrea Mollenauer",
    "industry_sectors": [
      "Hospitality",
      "Tourism",
      "Recreation"
    ],
    "transcript_excerpt_number": 30,
    "transcript_excerpt_text": "Interviewer  26:59   Okay, I think that's really great advice. And, Andrea, is there any last things you'd like to leave our listeners with?  Andrea Mollenauer  27:00   I think that's advice in many industries. I don't think there's any magic certificate or magic way or, you know, like secret to getting into something. It's just like, learn learn, learn work, work, work.",
    "quote": "I don't think there's any magic certificate or magic way or, you know, like secret to getting into something. It's just like, learn learn, learn work, work, work.",
    "initial_code": "Continuous Learning"
  },
  {
    "podcast_number": 98,
    "podcast_title": "Andrea Mollenauer | Chef Instructor Cabrillo College Culinary",
    "podcast_link": "https://soundcloud.com/what-to-be/andrea-mollenauer",
    "interviewee_name": "Andrea Mollenauer",
    "industry_sectors": [
      "Hospitality",
      "Tourism",
      "Recreation"
    ],
    "transcript_excerpt_number": 32,
    "transcript_excerpt_text": "Interviewer  27:22   Anything you'd like to add?  Andrea Mollenauer  27:23   Oh, have fun with food, everybody. That's my most favorite thing to to challenge people with. It's just like, see something at the supermarket you've never tried before. Grab it. Try a new way of cooking something that is familiar to you or always say yes, and try things at least twice. That's my challenge to all of our listeners play with food and be adventurous.",
    "quote": "See something at the supermarket you've never tried before. Grab it. Try a new way of cooking something that is familiar to you or always say yes, and try things at least twice... play with food and be adventurous.",
    "initial_code": "Be adventerous"
  }
];