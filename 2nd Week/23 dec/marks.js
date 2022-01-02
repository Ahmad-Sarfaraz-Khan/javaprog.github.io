 var g_class = {
  'name': "Logic Building",
  'instructor': {
    'name': "Lora",
    'subject': "Loops"
  },
  'students': [{
      'name': 'David',
      'marks': 86,
    },
    {
      'name': 'Marcus',
      'marks': 88,
    },
    {
      'name': 'Emroy',
      'marks': 75,
    },
    {
      'name': 'Ayaan',
      'marks': 70,
    },
    {
     'name': 'Chang',
     'marks': 92,
    },
    {
     'name': 'Nelson',
     'marks': 85,
    },
    {
     'name': 'Peter',
     'marks': 89,
    }
  ],
};

console.log(g_class.instructor.name);
console.log(g_class['instructor']['name']);
console.log(g_class.students[0].name);
console.log(g_class.students[1].name);
console.log(g_class.students[4].name);
console.log(g_class.students[6].name);