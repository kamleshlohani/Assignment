// Simulate API call with delay
export const fetchProviders = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          name: 'Bright Minds Center',
          specialization: 'Dyslexia Support',
          location: 'Mumbai',
          rating: 4,
          shortDescription: 'Helping children with dyslexia thrive.',
          longDescription: 'We offer personalized dyslexia support programs for different age groups.',
          contactEmail: 'contact@brightminds.com',
          phoneNumber: '9876543210'
        },
        {
          id: '2',
          name: 'Focus First',
          specialization: 'ADHD Coaching',
          location: 'Delhi',
          rating: 5,
          shortDescription: 'Coaching kids to stay organized and focused.',
          longDescription: 'Our ADHD coaches support students with strategies and routines that work.',
          contactEmail: 'hello@focusfirst.org',
          phoneNumber: '9123456780'
        },
        {
          id: '3',
          name: 'Calm Minds Academy',
          specialization: 'Autism Support',
          location: 'Bangalore',
          rating: 3,
          shortDescription: 'Inclusive education center.',
          longDescription: 'Support and activities for kids on the autism spectrum to learn and grow.',
          contactEmail: 'info@calmminds.in',
          phoneNumber: '9988776655'
        },
        {
          id: '4',
          name: 'Speak Easy Therapy',
          specialization: 'Speech and Language Therapy',
          location: 'Hyderabad',
          rating: 4,
          shortDescription: 'Helping children find their voice.',
          longDescription: 'We provide speech therapy tailored to each child’s specific language and communication needs.',
          contactEmail: 'support@speakeasy.com',
          phoneNumber: '9001234567'
        },
        {
          id: '5',
          name: 'Vision Learn',
          specialization: 'Learning Disability Support',
          location: 'Pune',
          rating: 5,
          shortDescription: 'Customized learning plans for every child.',
          longDescription: 'Expert educators work closely with students to overcome learning challenges in a structured environment.',
          contactEmail: 'connect@visionlearn.org',
          phoneNumber: '9911223344'
        },
        {
          id: '6',
          name: 'NeuroNurture',
          specialization: 'Neurological Support',
          location: 'Chennai',
          rating: 4,
          shortDescription: 'Helping children with neurological disorders excel.',
          longDescription: 'Providing therapies for cognitive development and neuro-motor support.',
          contactEmail: 'care@neuronurture.in',
          phoneNumber: '9333344455'
        }
      ]);
    }, 1000);
  });
};
