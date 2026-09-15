# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


/*=================================================================
المستخدم فى الموقع
===================================================================*/

/*

1- tailwind css

2- daisy UI

3- materia UI
4- material_icons
5- @mui/x-date-pickers

6- react_icons

7- react_router_dom

8- Motion animation library

9- gsap

10- reactbits
11- react-countup
12- motion
12- react-intersection-observer

13- dayjs

14- uuid

15- Swiper 

16- lottie-react Animations

17- leaflet react-leaflet

18- formSpree

19- framer-motion

20- react-hot-toast

21- formik AND yup

22- lucide-react

23- axios 

24- zustand

25- formspree/react

26- react-to-print

27- i18next للترجمعه

-chatgpt
*/

/*=================================================================
المستخدم فى الموقع
===================================================================*/










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










//عاوز شرح لى دول تمام
>> npm install react-to-print

>> import { useRef } from "react";
 AND 
 import { useReactToPrint } "react-to-print";

>> event.stopPropagation();











//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










//الباقى واعمله فى خطه التطوير بقى ان شاء الله

>>











//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










<!-- الشرح الخاص بى صفحه ال Tour , Hotel , Car , Food -->
===========================================
===========================================



>>>>> Setp 1

>>  const categories = [...new Set(allDataTour.map((d) => d.category))].sort();

>>  const reviewScores = [...new Set(allDataTour.map((d) => d.tag))].sort();



>> الشرح 



>> هدفه إنه يجيب كل الـ categories المختلفة بدون تكرار.

>> مثال:

const allDataTour = [
  { id: 1, category: "Beach" },
  { id: 2, category: "Mountain" },
  { id: 3, category: "Beach" },
  { id: 4, category: "Adventure" },
];





>> 1. map

allDataTour.map((c) => c.category)

بتحول الـ array إلى:
["Beach", "Mountain", "Beach", "Adventure"]





>> 2. new Set()

new Set(["Beach", "Mountain", "Beach", "Adventure"])

الـ Set بيشيل أي قيم مكررة، فيبقى:

Set(3) {
  "Beach",
  "Mountain",
  "Adventure"
}

لكن الـ Set مش Array.





>> 3. [...new Set(...)]  (Spread Operator)

علشان نحول الـ Set لـ Array تاني:

[...new Set(["Beach", "Mountain", "Beach", "Adventure"])]

الناتج النهائي:
["Beach", "Mountain", "Adventure"]





>> 4. .sort()

بترتب العناصر أبجديًا:
["Beach", "City", "Mountain"]





>> يعني الكود كله:

const categories = [...new Set(allDataTour.map((d) => d.category))];

const categories = ["Beach", "City", "Mountain"];

معناه:

هات كل الـ category من allDataTour، وبعد كده شيل التكرارات، وارجعهم في Array جديدة.

وده بيتستخدم كتير لما تعمل فلترة أو Tabs أو Select للـ Categories بحيث كل Category تظهر مرة واحدة بس.





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





>>>>> Setp 2



>>[
  {attractions: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise", "Montmartre", "Notre Dame"]}
  attractions: ["Colosseum", "Vatican City", "Trevi Fountain", "Pantheon", "Roman Forum"],
>>],
    
>>  const allDataAttrActions = [...new Set(AllDataTourFilters.map((a) => a.attractions))];



>> الشرح 



>>المشكلة إن attractions نفسها Array، وأنت عامل Set على الـ Arrays كلها، مش على العناصر اللي جوه الـ Arrays.

أنت كاتب:

const allDataAttrActions = [
  ...new Set(AllDataTourFilters.map((a) => a.attractions)),
];

الـ map هنا بترجع:

[
  ["Eiffel Tower", "Louvre Museum", ...],
  ["Colosseum", "Vatican City", ...],
  ["Burj Khalifa", "Dubai Mall", ...],
]

فـ Set بيشيل الـ Arrays المكررة فقط، مش الـ Attractions اللي جواها.





>>الحل الصحيح

لازم تفرد (flatten) كل الـ Arrays الأول باستخدام flatMap:

const allDataAttrActions = [
  ...new Set(
    AllDataTourFilters.flatMap((item) => item.attractions)
  ),
];

console.log(allDataAttrActions);

النتيجة هتبقى:

[
  "Eiffel Tower",
  "Louvre Museum",
  "Seine River Cruise",
  "Montmartre",
  "Notre Dame",
  "Colosseum",
  "Vatican City",
  "Trevi Fountain",
  ...
]





>>ليه flatMap؟

بدل ما تعمل:

const x = AllDataTourFilters.map((item) => item.attractions);

اللي بتديك:

[
  ["a", "b"],
  ["c", "d"]
]

flatMap بتعمل:

const x = AllDataTourFilters.flatMap((item) => item.attractions);

فتديك:

["a", "b", "c", "d"]

وبعدين Set يشيل أي تكرار بينهم.





>>ولو عايز ترتبهم أبجديًا كمان:

const allDataAttrActions = [
  ...new Set(
    AllDataTourFilters.flatMap((item) => item.attractions)
  ),
].sort();





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





>>>>> Set 3



>> const [GetALLDataPage, set] = useState(SetALLDataPage); // الاصليه


>> const [GetALLFilteredData, setALLFilteredData] = useState(SetALLDataPage); // المعروضه فى ال cards


>>const FilteredRating = (RatingName) => {
      const resultFilter = GetALLDataPage.filter(
          (item) => item.rating >= RatingName,
      );

      setALLFilteredData(resultFilter);
};


>>وخلي بالك من حاجة مهمة جدًا:

لازم تعمل الفلترة على البيانات الأصلية:

GetALLDataPage

مش على:

GetALLFilteredData

لأن لو فلترت على البيانات المفلترة قبل كده، النتائج هتقل كل مرة ومش هتعرف ترجع بسهولة.



>> الشرح 



>>افترض إن عندك البيانات الأصلية كده:

const tours = [
  { name: "A", rating: 5 },
  { name: "B", rating: 4.9 },
  { name: "C", rating: 4.7 },
  { name: "D", rating: 4.5 },
];

وعندك:

const [allFilteredData, setAllFilteredData] = useState(tours);





>>❌ لو استخدمت GetALLFilteredData
const FilteredRating = (rating) => {
  const result = GetALLFilteredData.filter(
    (item) => item.rating >= rating
  );

  setALLFilteredData(result);
};

اللي هيحصل:

أول مرة تضغط:

4.7 Star & Up

هيبقى:

[
  { name: "A", rating: 5 },
  { name: "B", rating: 4.9 },
  { name: "C", rating: 4.7 },
]

تمام.

بعد كده لو ضغطت:

4.5 Star & Up

المفروض يجيب الأربعة عناصر كلهم.

لكن هو هيفلتر على النتيجة القديمة فقط:

[
  { name: "A", rating: 5 },
  { name: "B", rating: 4.9 },
  { name: "C", rating: 4.7 },
]

فالعنصر:

{ name: "D", rating: 4.5 }

مش هيرجع تاني لأنه اتشال قبل كده!





>>✅ الصح: استخدم البيانات الأصلية
const FilteredRating = (rating) => {
  const result = GetALLDataPage.filter(
    (item) => item.rating >= rating
  );

  setALLFilteredData(result);
};

كل مرة المستخدم يضغط على فلتر جديد، هنبدأ من البيانات الأصلية كلها:

GetALLDataPage

وبعدين نطبق الفلتر المطلوب.





>>سؤال مهم

أنت عندك أكتر من فلتر مع بعض؟

يعني Category + Price + Rating في نفس الوقت؟

ولا كل فلتر بيشتغل لوحده؟ لأن لو فيه أكتر من فلتر، الطريقة هتختلف شوية والأفضل نخزن قيم الفلاتر كلها ونطبقها مرة واحدة.





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





>>>>> Set 4



>>location: {
    address: "France",
    city: "Paris",
    country: "France",
  },

>>description: [
  "Experience the romance of Paris with iconic landmarks and unforgettable moments.",

  "This carefully curated Paris Romantic Esctakes you through the heart of the CityLove. Enjoy breathtaking views from the EifTower, a luxury Seine River cruise at sunsworld-class dining experiences, and charmstreets filled with culture and histoPerfect for couples seeking unforgettamemories in one of the world's most romandestinations."
  ]
  
>>faq: [
      {
        id: 1,
        question: "Is this trip suitable for honeymoon",

        answer: "Yes, this package is specially designed for couples and honeymooners.",

        defaultChecked: true,
      },
      {
        id: 2,
        question: "Are meals included?",

        answer: "Breakfast is included daily. Lunch and dinner are optional.",

        defaultChecked: false,
      },
      {
        id: 3,
        question: "Can I customize the itinerary?",

        answer: "Yes, customization is available based on request.",

        defaultChecked: false,
      },
      {
        id: 4,
        question: "Is airport pickup included?",

        answer: "Yes, airport pickup and drop-off are included.",

        defaultChecked: false,
      },
  ],





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





>>>>> Set 5



>> لو عاوز تعمله فى tsrpi 



>> الشرح 



>> 




>>1) تعمل details كـ Component كبير (مش أنصح بيه)

يبقى:

details: {
  gallery: [],
  highlights: [],
  included: [],
  excluded: [],
  itinerary: [],
  faq: [],
  reviews: []
}

وده هيحتاج:

Component اسمه tour-details
جواه Components تانية:
itinerary-item
faq-item
review-item

وده هيبقى معقد شوية.





>>2) تعمل كل حاجة Field مستقلة في Tour (أنصح بيه) ✅

يبقى:

{
  title,
  price,
  ...

  gallery,
  highlights,
  included,
  excluded,
  itinerary,
  faq,
  reviews
}

يعني نشيل details خالص من Strapi.

ولما نجيب الـ API في React نعمل:

const tour = data;

const newTour = {
  ...tour,
  details: {
    gallery: tour.gallery,
    highlights: tour.highlights,
    included: tour.included,
    excluded: tour.excluded,
    itinerary: tour.itinerary,
    faq: tour.faq,
    reviews: tour.reviews,
  },
};

وبالتالي الكود القديم بتاعك هيشتغل بدون تعديل تقريبًا.





>>3) تستخدم JSON لبعض الحاجات

مثلاً:

highlights -> JSON
included -> JSON
excluded -> JSON
reviews -> JSON

و:

itinerary -> Repeatable Component
faq -> Repeatable Component
gallery -> Multiple Media

وده هيخلي الـ API قريبة جدًا من البيانات الحالية.





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





>>>>> Set 6



>> time: new Date().toLocaleString(),لو عاوز عمل ده فى strapi



>> الشرح : 



>>أيوه، ينفع، بس مش بنفس الطريقة دي:

time: new Date().toLocaleString()

لأن دي JavaScript بتتنفذ في الـ Frontend أو الـ Backend وقت تشغيل الكود، أما في Strapi فأنت بتخزن بيانات في قاعدة البيانات





>>الحل الأول: تستخدم DateTime Field (الأفضل) ✅

في Component الـ Review اعمل Field:

time
↓
Date
↓
Date & Time

ولما تضيف Review في الـ Content Manager هتختار التاريخ والوقت.

الـ API هترجع:

{
  "time": "2026-07-05T18:30:00.000Z"
}

وفي React تعمل:

new Date(review.time).toLocaleString()

أو:

new Date(review.time).toLocaleDateString("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
})
الحل الثاني: تعتمد على createdAt

لو الـ Reviews هتتضاف من خلال Strapi أو المستخدمين، ممكن ما تعملش Field اسمها time أصلًا، وتستخدم:

review.createdAt

لأن Strapi بيضيفها تلقائيًا.

لكن ده ينفع لو الـ Review نفسها Entity مستقلة (Collection Type)، مش Component.





>>لو عاوز نفس الشكل الحالي بالظبط

أنت عندك:

time: new Date().toLocaleString()

يبقى الأفضل في Strapi:

time → Date & Time

وبعدين في React:

const formattedTime = new Date(review.time).toLocaleString();

فتبقى النتيجة النهائية للمستخدم هي نفسها تقريبًا، لكن البيانات متخزنة بشكل صحيح واحترافي في قاعدة البيانات.





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





>>>>> Set 7



>>بص انا كنت عامل كده         "http://localhost:1337/api/tours?populate=*"  بس مكنتش شغاله ولما عملت كده         "http://localhost:1337/api/tours?populate[details][populate]=gallery",  اشتغل عادى مش عارف ليه بقى 



>> الشرح 



>>ليه populate=* مشتغلتش؟

أنت كنت عامل:

http://localhost:1337/api/tours?populate=*

ومتوقع إنها ترجع:

details: {
  gallery: [...],
  highlights: [...],
  included: [...],
  excluded: [...]
}

لكن gallery كانت ناقصة.

وده لأن:

gallery = Media Field
وجوا details = Component

يعني عندك:

Tour
└── details (Component)
    └── gallery (Media Multiple)

وده اسمه:

Nested Population





>>populate=* بيعمل إيه؟

في بعض إصدارات Strapi، populate=* بيعمل Populate للمستوى الأول فقط:

Tour
└── details ✅

لكن مش بينزل جوه الـ details عشان يجيب:

details
└── gallery ❌

لأن gallery Media موجودة داخل Component.

ليه ده اشتغل؟
http://localhost:1337/api/tours?populate[details][populate]=gallery

لأنك قلت لـ Strapi صراحة:

هات details
وبعدين جوه details هات gallery

يعني:

populate: {
  details: {
    populate: ["gallery"]
  }
}





>>الأفضل في Axios

بدل ما تكتب URL طويلة، ممكن تعمل:

const res = await axios.get(
  "http://localhost:1337/api/tours",
  {
    params: {
      populate: {
        details: {
          populate: ["gallery"],
        },
      },
    },
  }
);

وده أنضف وأسهل لو بعدين ضفت:

itinerary.image
reviews.avatar
أي Media تانية.





>>لو عندك Media تانية جوه details

مثلاً:

details: {
    gallery: Media[],
    itinerary: [
        {
            image: Media
        }
    ]
}

ممكن تحتاج:

populate: {
    details: {
        populate: {
            gallery: true,
            itinerary: {
                populate: ["image"]
            }
        }
    }
}





>>نصيحتي ليك

بعد ما تخلص الـ Tour كاملة، اعمل ملف اسمه:

// src/services/tourApi.js

export const TOUR_POPULATE = {
  location: true,

  image: true,

  details: {
    populate: {
      gallery: true,

      itinerary: {
        populate: ["image"],
      },

      reviews: {
        populate: ["avatar"],
      },
    },
  },
};

وبعدين:

axios.get("http://localhost:1337/api/tours", {
  params: {
    populate: TOUR_POPULATE,
  },
});

هيبقى الموضوع منظم جدًا بدل ما تكتب populate كل مرة





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





>>>>> Set 8



>>  const [DataALLTour, setDataALLTour] = useState([]);



>>useEffect(() => {
    axios
      .get(
        "http://localhost:1337/api/tours",
        {
          params: {
            populate: TOUR_POPULATE,
          },
        },
      )
      .then((response) => {
        setDataALLTour(response?.data?.data);
        console.log(response?.data?.data);
      })
      .catch((error) => console.log(error));
>>}, []);



>>export function useFiltering({SetALLDataPage})
{
  const [GetALLDataPage, set] = useStae(SetALLDataPage); // الاصليه

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

  // const [GetALLFilteredData, setALLFilteredData] = useStat(SetALLDataPage); // المعروضه فى ال cards
>>}



>> الشرح : 



>>أيوه، لقيت المشكلة 100% 🎯.

المشكلة في أول سطرين هنا:

const [GetALLDataPage, set] = useState(SetALLDataPage);

const [GetALLFilteredData, setALLFilteredData] = useState(SetALLDataPage);

أنت فاكر إن SetALLDataPage هيتحدث لما الـ API ترجع، لكن useState بياخد القيمة مرة واحدة فقط.

يعني التسلسل كده:

أول Render
DataALLTour = []

يبقى:

GetALLDataPage = []
GetALLFilteredData = []
بعد ما Axios ترجع البيانات
DataALLTour = [tour1, tour2, ...]

لكن:

GetALLDataPage = [] ❌
GetALLFilteredData = [] ❌

لأنهم اتخزنوا في الـ State من أول مرة.

ولما تعمل Save للملف (Hot Reload)، الـ Hook بيتبني من جديد، فياخد البيانات الجديدة، فتظهر الـ Cards.





>>الحل

بدل ما تخزن SetALLDataPage في State، خليه متغير عادي.

بدل:

const [GetALLDataPage, set] = useState(SetALLDataPage);

اعمل:

const GetALLDataPage = SetALLDataPage;





>>أما GetALLFilteredData، لو أنت محتاجه كـ State علشان الفلاتر، يبقى لازم تحدثه لما البيانات الأصلية تتغير.

أضف:

import { useEffect, useState } from "react";

وبعدين:

const [GetALLFilteredData, setALLFilteredData] = useState([]);

useEffect(() => {
  setALLFilteredData(SetALLDataPage);
}, [SetALLDataPage]);





>>يبقى بداية الـ Hook هتبقى كده:
import { useEffect, useState } from "react";

export function useFiltering({ SetALLDataPage }) {

  const GetALLDataPage = SetALLDataPage;

  const [GetALLFilteredData, setALLFilteredData] = useState([]);

  useEffect(() => {
    setALLFilteredData(SetALLDataPage);
  }, [SetALLDataPage]);

  // باقي الكود...
}





>>ليه ده صح؟
GetALLDataPage هيبقى دايمًا أحدث نسخة من البيانات اللي جاية من الـ API.
GetALLFilteredData هيتعمله Reset تلقائي أول ما البيانات توصل، وبعدها الفلاتر تشتغل عليه عادي.
كمان ملاحظة صغيرة

اسم الـ prop:

SetALLDataPage

مضلل شوية، لأن كلمة Set بتوحي إنه Setter Function.

الأفضل تسميه:

allDataPage

ويبقى:

useFiltering({
  allDataPage: DataALLTour,
});

وده هيخلي الكود أوضح.

جرب التعديل ده، وأنا متوقع بنسبة كبيرة جدًا إن مشكلة الـ Refresh هتختفي.





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





>>>>> Set 9



>> Object.assign(params.filters, customFilters);



>> الشرح : 



>>الأول عندك ده
const params = {
    populate,
    filters: {},
};

يعنى filters فاضية.

params = {
    populate: "*",

    filters: {

    }
}





>>بعدها أنت ضفت الفلاتر المشتركة

if (filters.category.length) {
    params.filters.category = {
        $in: filters.category,
    };
}

بقت

params = {
    populate: "*",

    filters: {
        category: {
            $in: ["Adventure"]
        }
    }
}





>>وبعدين

if (filters.price !== null) {
    params.filters.price = {
        $lte: 500,
    };
}

بقت

filters:{
    category:{
        $in:["Adventure"]
    },

    price:{
        $lte:500
    }
}





>>دلوقتى TourFilters رجعت

مثلاً

const customFilters = {
    language:{
        $in:["English"]
    },

    duration:{
        $in:["5 Days"]
    }
}





>>لو عملت

params.filters = customFilters;

هيحصل إيه؟

هيشيل القديم كله.

هيبقى

filters:{
    language:{
        $in:["English"]
    },

    duration:{
        $in:["5 Days"]
    }
}

وفلتر

category ❌
price ❌

راحوا.





>>علشان كده استخدمنا
Object.assign(params.filters, customFilters);

دى معناها

ضيف اللى جوه customFilters على params.filters بدون ما تمسح القديم.





>>مثال

قبل

params.filters = {

    category:{
        $in:["Adventure"]
    },

    price:{
        $lte:500
    }

}

و

customFilters = {

    language:{
        $in:["English"]
    },

    duration:{
        $in:["5 Days"]
    }

}

بعد

Object.assign(params.filters, customFilters);

النتيجة

params.filters = {

    category:{
        $in:["Adventure"]
    },

    price:{
        $lte:500
    },

    language:{
        $in:["English"]
    },

    duration:{
        $in:["5 Days"]
    }

}

شايف؟

هو جمعهم مع بعض.





>>ونفس الكلام ممكن يتكتب بطريقة أنت تعرفها أكتر

بدل

Object.assign(params.filters, customFilters);

تقدر تكتب

params.filters = {
    ...params.filters,
    ...customFilters,
};

وده نفس الناتج 100%.





>>أنا شخصيًا لو بكتب React أو JavaScript حديث، بفضل الطريقة دى لأنها أوضح:
params.filters = {
    ...params.filters,
    ...customFilters,
};

أسهل فى القراءة، وبتستخدم الـ spread operator اللى أنت أكيد متعود عليه.





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





>>>>> Set 10



>> setFilterCards(prev => {

    //Check is category IN Array ALL Categories
    if (prev.category.includes(categoryName)) {
        return {
            ...prev,
            category: prev.category.filter(
                item => item !== categoryName
            ),
        };
    }

    const resultCategories = {
        ...prev,
        category: [...prev.category, categoryName],
    }

    return resultCategories;
});


>> الشرح : 



>>أول حاجة

setFilterCards دى جاية من useState.

مثلاً:

const [FilterCards, setFilterCards] = useState({
    category: [],
    price: null,
    language: [],
});

يبقى الـ state فى الأول:

FilterCards = {
    category: [],
    price: null,
    language: [],
}





>> بعد كده

أنت كتبت

setFilterCards(prev => {

هنا React بتبعتلك آخر قيمة موجودة فى الـ state.

يعنى

prev

هتساوى

{
    category: [],
    price: null,
    language: [],
}





>> نفترض المستخدم ضغط على
Adventure

يبقى

categoryName = "Adventure"





>> السطر ده
if (prev.category.includes(categoryName))

معناه

هل

[]

فيها

Adventure

أكيد لا.

إذن

false

فينزل على الجزء اللى بعده.





>> هنا
const resultCategories = {
    ...prev,
    category: [...prev.category, categoryName],
}

نفكها.





>> الأول
...prev

يعنى انسخ كل الـ object

فيبقى

{
    category: [],
    price: null,
    language: [],
}





>> بعدين
category:

أنا عايز أغير الـ category فقط.





>> السطر ده
[...prev.category, categoryName]

نفترض

prev.category

=

[]

يبقى

[
    ...[],
    "Adventure"
]

=

["Adventure"]





>> يبقى

resultCategories

بقت

{
    category: ["Adventure"],
    price: null,
    language: [],
}





>> ثم

return resultCategories;

React تعمل

FilterCards = {
    category: ["Adventure"],
    price: null,
    language: [],
}





>> المستخدم ضغط على Adventure مرة تانية

دلوقتى

prev.category

=

["Adventure"]





>> السطر

prev.category.includes(categoryName)

يبقى

["Adventure"].includes("Adventure")

=

true

إذن يدخل هنا

return {
    ...prev,
    category: prev.category.filter(
        item => item !== categoryName
    ),
};





>> نفهم filter

عندك

prev.category

=

["Adventure"]





>> عملت

filter(item => item !== "Adventure")

الـ filter هتلف على كل عنصر.

العنصر الأول

item = "Adventure"

تسأل

item !== "Adventure"

=

false

يبقى متحطوش.

النتيجة

[]





>> يبقى الـ object الجديد

{
    category: [],
    price: null,
    language: [],
}

يعنى شال الـ category.





>> مثال أكبر

نفترض

category: [
    "Adventure",
    "Luxury",
    "Family"
]

والمستخدم ضغط

Luxury

الـ filter هتلف.





>> العنصر الأول

Adventure

هل

Adventure !== Luxury

نعم.

يبقى خليه.





>> العنصر الثانى

Luxury

هل

Luxury !== Luxury

لا.

يبقى احذفه.





>> العنصر الثالث

Family

هل

Family !== Luxury

نعم.

يبقى خليه.





>> الناتج

[
    "Adventure",
    "Family"
]





>> ليه استخدمنا prev =>؟

بدل ما نكتب

setFilterCards({
    ...
});

لأن React ممكن تعمل تحديثات متتالية.

مثلاً المستخدم ضغط بسرعة:

Adventure
Luxury
Family

لو استخدمت القيمة القديمة مباشرة، ممكن بعض التحديثات تضيع.

لكن مع

setFilterCards(prev => ...)

React تضمن إن prev هو آخر state محدث وقت تنفيذ التحديث، وده الأسلوب الموصى به لما الحالة الجديدة تعتمد على الحالة السابقة.





>> الفكرة كلها في سطر واحد

الكود ده بيعمل Toggle للـ Checkbox:

لو الـ Category مش موجودة ➜ يضيفها.
لو الـ Category موجودة بالفعل ➜ يحذفها.

وده بالضبط السلوك اللي بتتوقعه من أي Checkbox Filter في مواقع زي Booking أو Amazon أو Airbnb.





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





>>>>> Set 11



>> export function BuildAPI_Filters({ALLfilters, customFilters}) {

//Create Filter IN Object
    const apiFilters_Shared = {}


////////////////////////////////////////////////////////////
//Step 1 ==>  Shared Filters
////////////////////////////////////////////////////////////

    //Step 1 ==>  ALL categories
    if (ALLfilters.categories.length) {
        apiFilters_Shared.category = {
            $in: ALLfilters.categories,
        };
    }

    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////

    //Step 2 ==>  price
    //وده هيجيب كل الرحلات اللي سعرها أقل من أو يساوي القيمة اللي واقف عندها السلايدر.
    if (ALLfilters.price !== null) {
        apiFilters_Shared.price = {
            $lte: ALLfilters.price,
        };
    }

    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////

    //Step 3 ==>  ALL Languages
    if (ALLfilters.languages.length) {
        apiFilters_Shared.language = {
            $in: ALLfilters.languages,
        };
    }

    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////

    //Step 4 ==>  ALL Review_Scores
    if (ALLfilters.reviewScores.length) {
        apiFilters_Shared.tag = {
            $in: ALLfilters.reviewScores,
        };
    }

    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////

    //Step 5 ==>  ALL Review_Scores
    if (ALLfilters.search.trim()) {
        apiFilters_Shared.title = {
            $containsi: ALLfilters.search.toLowerCase().trim(),
        };
    }

////////////////////////////////////////////////////////////
// Merge Shared + Page Filters
////////////////////////////////////////////////////////////
    const aLLFilters = {
        ...apiFilters_Shared,
        ...customFilters,
    }


return aLLFilters;
} 



>> ودلوقتي سؤالك هو: ليه بناخد نسخة؟
تعالى واحدة واحد



>> الشرح : 



>> أولاً: عندنا Object اسمه
const apiFilters = {
    category: {
        $in: ["Adventure"],
    },
    price: {
        $lte: 500,
    },
};

وعندنا كمان

const customFilters = {
    language: {
        $in: ["English"],
    },
};

إحنا عاوزين فى الآخر يبقى عندنا Object واحد:

{
    category: {
        $in: ["Adventure"],
    },

    price: {
        $lte: 500,
    },

    language: {
        $in: ["English"],
    },
}





>> لو عملنا
const filters = apiFilters;

يبقى الاتنين بقوا بيشاوروا على نفس الـ Object فى الذاكرة.

filters
      │
      ▼
  {
    category: ...
  }
      ▲
      │
apiFilters

يعنى لو عملت

filters.language = {
    $in: ["English"],
};

هيتغير

apiFilters

كمان.

وده إحنا مش عاوزينه.





>> علشان كده بنعمل Copy
const filters = {
    ...apiFilters,
};

بقى عندنا Object جديد.

apiFilters            filters

{...}     ---->      {...}

كل واحد مستقل عن التانى.





>> طيب ليه
...customFilters

لأننا عاوزين نضيف الفلاتر الخاصة بالصفحة.

يعنى

apiFilters

فيه

category
price
language
review
search

لكن

customFilters

مثلاً فى الـ Tours فيه

duration
attractions

وفى Hotels

stars
facilities

وفى Cars

brand
fuel

فإحنا بنجمعهم.





>> مثلاً

apiFilters

=

{
    category: {},
    price: {},
}

و

customFilters

=

{
    duration: {},
    attractions: {},
}

بعد الـ Spread

const filters = {
    ...apiFilters,
    ...customFilters,
};

يبقى

{
    category: {},
    price: {},
    duration: {},
    attractions: {},
}





>> كمان ليها فايدة مهمة

لو الاتنين فيهم نفس المفتاح.

مثلاً

apiFilters = {
    price: {
        $lte: 500,
    },
};

و

customFilters = {
    price: {
        $gte: 100,
    },
};

يبقى

const filters = {
    ...apiFilters,
    ...customFilters,
};

النتيجة

{
    price: {
        $gte: 100,
    },
}

لأن آخر Spread هو اللى بيكسب.





>> هل لازم تعمل متغير جديد؟

في حالتك مش لازم، لأنك بترجعه على طول.

بدل:

const filters = {
    ...apiFilters,
    ...customFilters,
};

return filters;

تقدر تكتب ببساطة:

return {
    ...apiFilters,
    ...customFilters,
};

وده نفس النتيجة تمامًا، وكود أقصر. أما لو كنت هتستخدم filters في كذا مكان قبل الـ return، فساعتها إنشاء المتغير بيكون أوضح للقراءة.





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





>>>>> Set 12



>> console.log(JSON.stringify(params, null, 2));



>> الشرح : 



>> عايز أشوف هيبقى بالشكل ده ولا لأ:

{
  "populate": {
    "image": true,
    "location": true,
    "attractions": true,
    "details": {
      "populate": {
        "gallery": true,
        "itinerary": {
          "populate": {
            "image": true
          }
        },
        "faq": true,
        "reviews": true
      }
    }
  },
  "filters": {
    "attractions": {
      "name": {
        "$in": [
          "5th avenue",
          "akihabara",
          "asakusa"
        ]
      }
    }
  },
  "sort": []
}





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





>>>>> Set 13



>> لو عايز البحث يكون غير حساس للأحرف in Strip



>> الشرح : 



>> استخدم $eqi بدلاً من $eq.


>> لكن للأسف $ini غير موجود في Strapi





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





>>>>> Set 14



>>



>> الشرح : 



>> 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










<!-- كل الكلام ده فى صفحه تفاصيل ال Blogs تمام -->
====================================================
====================================================

<!-- Step 1 ==> SearchWidget

تمام، خلينا نمسك Search Widget واحدة واحدة كأننا بنصممها من الصفر.

1. المستخدم هيشوف إيه؟

أنت عندك Input:

[ Search Here... ]

أول ما يكتب:

beach

تحت الـ Input يظهر له النتائج مباشرة.

مثال:

--------------------------------
📷 صورة
Top 10 Hidden Beach Destinations
September 12, 2026
--------------------------------

📷 صورة
Best Beaches In Bali
October 2, 2026
--------------------------------

📷 صورة
Hidden Beaches Of Greece
November 1, 2026
--------------------------------

وده فعلاً شبه الـ Recent Post اللي عاملها.

2. أبحث في إيه؟

أنا عندي Blog:

{
 title:"Top 10 Hidden Beach Destinations",

 category:"Beach Travel",

 details:{
   postBody:{
      tags:[
        "Travel",
        "Beach",
        "Summer"
      ]
   }
 }
}

لو المستخدم كتب:

Beach

المفروض يرجع النتيجة.

ليه؟

لأنها موجودة في:

title

وكمان موجودة في:

tags
3. معنى filter

مثال:

const numbers = [1,2,3,4,5];

عاوز الأرقام الأكبر من 3:

const result = numbers.filter(
  (num) => num > 3
);

الناتج:

[4,5]

يعني:

filter

معناها:

هات العناصر اللي تحقق الشرط
4. شرح الكود بتاعك
const resultsSearch = Blogs.filter(
  (blog) =>
    blog.title.includes(search) ||
    blog.category.includes(search) ||
    blog.details.postBody.tags.some(
      (tag) => tag.includes(search)
    )
);
الجزء الأول
blog.title.includes(search)

مثال:

blog.title =
"Top 10 Hidden Beach Destinations"

search =
"Beach"

السؤال:

هل كلمة Beach موجودة داخل العنوان؟

الإجابة:

true
الجزء الثاني
blog.category.includes(search)

مثال:

category =
"Beach Travel"

search =
"Beach"

هل موجودة؟

true
الجزء الثالث
tags.some(...)

دي مهمة جداً.

مثال:

tags:[
 "Travel",
 "Beach",
 "Summer"
]

المستخدم كتب:

Beach

some

بتسأل:

هل يوجد عنصر واحد على الأقل يحقق الشرط؟

يعني:

tags.some(
  (tag) => tag.includes("Beach")
)

هتلف على:

Travel

لا

Beach

نعم

فترجع:

true
5. ليه some مش filter؟

لأن:

tags

Array.

وأنت مش عاوز ترجع Tags.

أنت عاوز تعرف:

هل فيه Tag مطابق؟

فـ:

some

أنسب.

6. بعد ما أجيب النتائج؟

أعرضها تحت الـ Input.

مثال:

{resultsSearch.map((blog) => (
  <div key={blog.id}>
    <img src={blog.image} />

    <h4>{blog.title}</h4>

    <p>{blog.date}</p>
  </div>
))}
7. لو ضغط على نتيجة؟

هنا أهم نقطة.

أنت عندك:

slug

مثال:

slug:
"hidden-beach-destinations"

لما يضغط:

navigate(
 `/blogs/${blog.slug}`
);

أو:

<Link
 to={`/blogs/${blog.slug}`}
>

هيوديه مباشرة لصفحة التفاصيل الخاصة بالـ Blog.

8. إمتى أظهر النتائج؟

أنا أفضل:

لو المستخدم كتب حرفين أو أكتر

مثال:

if(search.length >= 2)

عشان لو كتب:

a

هيطلع نص الموقع 😂

9. لو مفيش نتائج؟

أظهر:

No blogs found

بدل مساحة فاضية.

الخطة اللي هنمشي عليها
Search
يبحث في:
title
category
tags
يظهر:
الصورة
العنوان
التاريخ
الضغط:
يفتح صفحة الـ Blog
لو مفيش نتائج:
No blogs found
لو البحث أقل من حرفين:
لا تعرض نتائج

وده يعتبر Search Widget احترافي لمشروع الـ Blogs بتاعك. بعد ما تخلصه ندخل على Recent Post ونفهم الـ Logic بتاعها بنفس الطريقة.


,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


قول اللي مش فاهمه وأنا أوضحه، لكن فيه كام حاجة أنا شايفها مباشرة:

1. useState([]) غلط هنا

أنت عامل:

const [search, setSearch] = useState([]);

المفروض:

const [search, setSearch] = useState("");

لأن الـ Search نص مش Array.

2. أول ما الصفحة تفتح هيعرض كل الـ Blogs

لأن:

"Top 10 Hidden Beach Destinations".includes("")

بترجع:

true

فكل الـ Blogs هتظهر.

الحل:

const resultsSearch =
  search.length >= 2
    ? Blogs.filter(
        (blog) =>
          blog.title.includes(search) ||
          blog.category.includes(search) ||
          blog.details.postBody.tags.some((tag) =>
            tag.includes(search)
          )
      )
    : [];
3. الأفضل تخلي البحث غير حساس لحالة الأحرف

يعني:

beach

و

Beach

و

BEACH

كلهم يشتغلوا.

مثال:

const resultsSearch =
  search.length >= 2
    ? Blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(search.toLowerCase()) ||
          blog.category.toLowerCase().includes(search.toLowerCase()) ||
          blog.details.postBody.tags.some((tag) =>
            tag.toLowerCase().includes(search.toLowerCase())
          )
      )
    : [];
4. اعمل حماية للصور
<img
  src={blog.image}
  alt={blog.title}
  className="w-20 h-20 object-cover"
/>
5. أهم سؤال

أنت مش فاهم إيه بالضبط؟

filter
includes
some
ليه النتائج بتظهر كلها؟
ليه البحث مش شغال؟
إزاي أضغط على النتيجة وأروح للـ Details Page؟

قول النقطة اللي واقف عندها ونكمل عليها واحدة واحدة.


,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


لا تمام كده 

ممتاز 🔥

يبقى قبل ما تدخل على الـ UI وتنسيق النتائج، أنت كده فهمت أهم 3 حاجات في البحث:

filter()
includes()
some()

ودول هتستخدمهم بعد كده في:

Search
Category
Popular Tags
Related Blogs
Filters

تقريبًا نص صفحة الـ Blogs مبنية عليهم 😅

دلوقتي الخطوة الجاية في الـ Search:

1. تحسين شكل النتائج

بدل:

<div key={blog.id}>
  <img src={blog.image} />

  <h4>{blog.title}</h4>

  <p>{blog.date}</p>
</div>

اعملها شبه الـ Recent Post Widget بالظبط.

2. إخفاء النتائج لو مفيش كتابة

مثال:

{search.length >= 2 && (
  <section>
    ...
  </section>
)}
3. لو مفيش نتائج
{search.length >= 2 && ResultsSearch.length === 0 && (
  <p>No blogs found</p>
)}
4. لما المستخدم يضغط على النتيجة

هي دي أهم خطوة بعد البحث.

هتستخدم:

blog.slug

وتروح على:

/blogs/hidden-beach-destinations

يعني نفس صفحة التفاصيل الخاصة بالـ Blog.

5. بعد ما تخلص الـ Search

هنخش على:

Recent Post

وهناك هنتكلم عن:

هل أجيب آخر 3 Blogs؟
ولا أجيب Blogs متعلقة بالـ Blog الحالي؟
أرتبهم حسب التاريخ إزاي؟
أعمل الـ Logic صح إزاي؟

وده هيكون أسهل من الـ Search بكتير. 🚀

-->





+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





<!-- Step 2 ==> RecentPostWidget

تمام، بعد ما خلصنا SearchWidget ندخل على RecentPostWidget.

وده أسهل Component في الـ Section Right كله تقريبًا.

فكرة Recent Post

المفروض يعرض:

آخر 3 Blogs

أو

آخر 5 Blogs

في الموقع.

يعني ملوش علاقة بالـ Blog المفتوح حاليًا.

المستخدم داخل على
Top 10 Hidden Beach Destinations

في الـ Right Side يشوف:

Recent Post

Best Luxury Hotels In Dubai
Winter Destinations In Europe
Food Guide In Turkey
أجيبهم منين؟

أنت عندك:

export const Blogs = [...]

كل Blog فيه:

date

مثال:

date: "September 12, 2026"
Logic

هات آخر Blogs حسب التاريخ.

const RecentPosts = [...Blogs]
  .sort(
    (a, b) =>
      new Date(b.date) -
      new Date(a.date)
  )
  .slice(0, 3);
شرح بسيط
sort

بيرتب.

new Date

بيحول:

"September 12, 2026"

لـ Date حقيقي.

b - a

يعني:

الأحدث الأول
slice
.slice(0,3)

يعني:

أول 3 Blogs فقط
أظهر إيه؟

أنصحك تعرض:

صورة
عنوان
تاريخ

بس.

زي ما عامل حاليًا.

لما أضغط على Blog؟

نفس فكرة Search.

onClick={() =>
  AddToDetailsPage(blog.id)
}

↓

يفتح:

Blog Details

للـ Blog ده.

سؤال مهم

هل أعرض الـ Blog الحالي؟

مثال:

أنا فاتح:

Top 10 Hidden Beach Destinations

وفي Recent Post يظهر:

Top 10 Hidden Beach Destinations

❌ لا

اعمل:

RecentPosts.filter(
  (blog) => blog.id !== currentBlog.id
);

لو تقدر توصل للـ currentBlog.

النتيجة النهائية
Recent Post Widget
يجيب آخر 3 Blogs.
يرتبهم حسب التاريخ.
يعرض:
الصورة
العنوان
التاريخ
عند الضغط:
يروح لصفحة الـ Blog.
الأفضل عدم إظهار الـ Blog الحالي لو موجود.

وده تقريبًا كل الـ Logic الخاص بـ Recent Post. بعده مباشرة هنخش على Category Widget لأن فيه فلترة لأول مرة وده أهم من Popular Tags. 🚀

-->





+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





<!-- Step 3 ==> CategoryWidget

تمام، دلوقتي ندخل على Category Widget.

وده أول Widget عندك بيعمل Filtering فعليًا.

فكرة Category

أنت عندك Categories ثابتة:

Beach Travel
Travel Tips
Luxury Travel
Adventure
Food & Culture
Photography
Hotels & Resorts

وكل Blog ليه Category واحدة:

category: "Beach Travel"
المستخدم هيشوف إيه؟
Category

Beach Travel (4)
Travel Tips (5)
Luxury Travel (3)
Adventure (2)
Food & Culture (4)
Photography (1)
Hotels & Resorts (1)
العدد بيتحسب إزاي؟

من الـ Blogs نفسها.

مثال:

const categoriesCount = Blogs.reduce(
  (acc, blog) => {
    acc[blog.category] =
      (acc[blog.category] || 0) + 1;

    return acc;
  },
  {}
);

الناتج:

{
  "Beach Travel": 4,
  "Travel Tips": 5,
  "Luxury Travel": 3,
}

وبعدين تحوله لشكل مناسب للـ map:

const categories = Object.entries(
  categoriesCount
).map(([name, count]) => ({
  name,
  count,
}));
لما المستخدم يضغط؟

مثال ضغط:

Beach Travel

المفروض يحصل:

Blogs.filter(
  (blog) =>
    blog.category ===
    "Beach Travel"
);

الناتج:

Top 10 Hidden Beach Destinations
Best Tropical Islands
Hidden Beaches Of Greece
Bali Beach Guide
هنا عندك طريقتين
الطريقة الأولى (الأفضل)

تروح لصفحة Blogs

مثال:

/blogs?category=Beach Travel

وهناك تعرض المقالات الخاصة بالـ Category.

الطريقة الثانية

لو المشروع صغير.

مجرد تخزن:

selectedCategory

وتفلتر الـ Blogs في نفس الصفحة.

في مشروعك

أنا أنصحك تعمل:

Category

↓

يفتح صفحة Blogs

↓

يعرض فقط الـ Blogs الخاصة بالـ Category المختارة.

ده أقرب للمواقع الحقيقية.

الفرق بين Category و Popular Tags
Category

كل Blog ليه:

Category واحدة فقط

مثال:

category:
"Beach Travel"
Tags

كل Blog ليه:

عدة Tags

مثال:

tags:[
 "Travel",
 "Beach",
 "Summer"
]

لذلك:

Category

أقسام رئيسية.

Tags

كلمات مفتاحية.

الخلاصة
Category Widget

يعرض:

Beach Travel (4)
Travel Tips (5)
Luxury Travel (3)
...
عند الضغط

يفلتر:

blog.category === selectedCategory
يعرض

كل المقالات التابعة لهذه الفئة.

وده كل الـ Logic الخاص بـ Category Widget. بعده مباشرة يبقى Popular Tags وده شبهه جدًا لكن باستخدام tags.includes(tag) بدل category === categoryName. 🚀


,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


بص كده أنت شغال صح جدًا 👍

الجزء الأول
const categoriesCount = CloneBlogs.reduce((acc, blog) => {
  acc[blog.category] = (acc[blog.category] || 0) + 1;
  return acc;
}, {});

ده بيحسب عدد الـ Blogs داخل كل Category.

الجزء الثاني
const categories = Object.entries(categoriesCount).map(([name, count]) => ({
  name,
  count,
}));

ده بيحولها للشكل ده:

[
  {
    name: "Beach Travel",
    count: 4,
  },
  {
    name: "Travel Tips",
    count: 5,
  },
];

وده ممتاز للـ UI.

الجزء الثالث
function FilterBlogCategory(SelectedCategory) {
  const selectedCategory = CloneBlogs.filter(
    (blog) => blog.category == SelectedCategory,
  );

  setBlog(selectedCategory);

  navigation("/Blogs_page");
}

وده شغال.

لكن عندي ملاحظتين:

1. غير اسم المتغير

أنت عامل:

const selectedCategory = ...

ونفس الوقت عندك:

SelectedCategory

فالأسماء متشابهة شوية.

الأوضح:

function FilterBlogCategory(SelectedCategory) {
  const FilteredBlogs = CloneBlogs.filter(
    (blog) => blog.category === SelectedCategory,
  );

  setBlog(FilteredBlogs);

  navigation("/Blogs_page");
}
2. استخدم ===

بدل:

==

استخدم:

===

دايمًا.

السؤال المهم

أنت عامل:

setBlog(FilteredBlogs);
navigation("/Blogs_page");

فده معناه إن:

Blogs_page

بيعرض الـ state اللي اسمها:

Blog

صح؟

لو آه يبقى الـ Logic كله تمام.

أنا شايف إنك جاهز دلوقتي تدخل على:

Popular Tags

لأنه تقريبًا نفس فكرة Category لكن الفرق الوحيد:

بدل:

blog.category === SelectedCategory

هيبقى:

blog.details.postBody.tags.includes(SelectedTag)

وكل حاجة تانية شبه بعض تقريبًا بنسبة 90%. 🚀

-->





+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





<!-- Step 4 ==> PopularTagsWidget 

-->





+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

<!-- flatMap VS map -->

flatMap() عبارة عن دمج بين:

map()

و

flat()

يعني بيعمل Mapping وبعدين يفرد الـ Arrays الناتجة في Array واحدة.

مثال عادي بـ map
const arr = [
  ["A", "B"],
  ["C", "D"],
];

const result = arr.map((item) => item);

console.log(result);

الناتج:

[
  ["A", "B"],
  ["C", "D"]
]

لسه Array جوه Array.

بـ flat()
const result = arr.map((item) => item).flat();

console.log(result);

الناتج:

["A", "B", "C", "D"]
نفس الكلام بـ flatMap()
const result = arr.flatMap((item) => item);

console.log(result);

الناتج:

["A", "B", "C", "D"]
عندك في الـ Blogs

كل Blog عنده:

tags: [
  "Travel",
  "Beach",
  "Summer",
]

فلو عملت:

Blogs.map((blog) => blog.details.postBody.tags)

هيديك:

[
  ["Travel", "Beach", "Summer"],
  ["Travel", "Budget Travel", "Deals"],
  ["Luxury", "Hotels", "Travel"]
]

Array جوه Array.

لكن لو عملت:

Blogs.flatMap(
  (blog) => blog.details.postBody.tags
)

هيديك:

[
  "Travel",
  "Beach",
  "Summer",
  "Travel",
  "Budget Travel",
  "Deals",
  "Luxury",
  "Hotels",
  "Travel"
]

Array واحدة كبيرة.

بعدها بنستخدم:

new Set(...)

علشان نشيل التكرار:

const tags = [
  ...new Set(
    Blogs.flatMap(
      (blog) => blog.details.postBody.tags
    )
  ),
];

الناتج:

[
  "Travel",
  "Beach",
  "Summer",
  "Budget Travel",
  "Deals",
  "Luxury",
  "Hotels"
]

وده بالضبط اللي محتاجه في Popular Tags. 🚀




+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


<!-- طب هل فيه تكرا فى ال Tags -->

أيوه، من الـ Tags اللي استخدمناها في الـ 20 Blog فيه تكرار كتير جدًا، وده طبيعي لأن نفس الـ Tag ممكن يظهر في أكتر من Blog.

مثال:

"Travel"

موجود تقريبًا في أغلب الـ Blogs.

وكمان:

"Adventure"
"Vacation"
"Luxury"
"Culture"
"Food"
"Photography"

متكررين أكتر من مرة.

علشان كده استخدمنا:

[...new Set(Blogs.flatMap(
  (blog) => blog.details.postBody.tags
))]

لأن Set بيشيل أي تكرار.

لو عاوز تشوف عدد مرات ظهور كل Tag ممكن تعمل:

const tagsCount = Blogs.flatMap(
  (blog) => blog.details.postBody.tags
).reduce((acc, tag) => {
  acc[tag] = (acc[tag] || 0) + 1;
  return acc;
}, {});

console.log(tagsCount);

هيطلع حاجة زي:

{
  Travel: 15,
  Adventure: 8,
  Vacation: 6,
  Luxury: 5,
  Beach: 4,
  Photography: 3,
  Culture: 4,
  Food: 3
}

وده أحسن نظام لو ناوي تعرض:

Travel (15)
Adventure (8)
Vacation (6)





+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


<!-- Popular Tags أيوه طبعًا كتير جدًا 😅 -->

الـ Popular Tags المفروض تبقى أشهر Tags فقط، مش كل Tags الموجودة في الموقع.

أنت عندك تقريبًا 50 Tag، وده مناسب للبحث الداخلي لكن مش مناسب للـ Widget.

اعرض مثلاً من 8 إلى 15 Tag فقط.

مثال كويس:

export const PopularTags = [
  "Travel",
  "Adventure",
  "Beach",
  "Vacation",
  "Luxury",
  "Hotels",
  "Food",
  "Culture",
  "Photography",
  "Travel Tips",
  "Budget Travel",
  "Winter",
];

أو 15 Tag:

export const PopularTags = [
  "Travel",
  "Adventure",
  "Beach",
  "Vacation",
  "Luxury",
  "Hotels",
  "Food",
  "Culture",
  "Photography",
  "Travel Tips",
  "Budget Travel",
  "Winter",
  "Honeymoon",
  "Road Trip",
  "Festival",
];
الأفضل كمان

رتبهم حسب عدد التكرار وخد أول 10 أو 12 فقط:

const PopularTags = allTags
  .sort((a, b) => b.count - a.count)
  .slice(0, 12);

وده اللي بتعمله أغلب مواقع الـ Blogs.

بالنسبة للـ Categories

اعرض كلهم عادي لأنهم 7 فقط:

Beach Travel (4)
Travel Tips (5)
Luxury Travel (3)
Adventure (2)
Food & Culture (4)
Photography (1)
Hotels & Resorts (1)

أما الـ Tags فخليها قليلة ومختارة بعناية. 10–12 Tag كفاية جدًا





+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




<!-- Category -->

  // اعرض الـ Categories الأساسية فقط:

  // [
  // "Beach Travel",
  // "Travel Tips",
  // "Luxury Travel",
  // "Adventure",
  // "Food & Culture",
  // "Photography",
  // "Hotels & Resorts",
  // ]

  //   الاستخدام الصح
  // CategoryWidget

  // يعرض:

  // Beach Travel
  // Travel Tips
  // Luxury Travel
  // Adventure
  // Food & Culture
  // Photography
  // Hotels & Resorts

  // ولما المستخدم يضغط على Category:

  // Beach Travel

  // تفلتر الـ Blogs وتجيب فقط:

  // Hidden Beach Destinations
  // Bali Honeymoon
  // Island Destinations
  // Winter Destinations

  // مثلاً.

  //   الناتج:

  // [
  //   {
  //     name: "Beach Travel",
  //     count: 4,
  //   },

  //   {
  //     name: "Travel Tips",
  //     count: 5,
  //   },

  //   {
  //     name: "Luxury Travel",
  //     count: 3,
  //   },

  //   {
  //     name: "Adventure",
  //     count: 2,
  //   },
  // ];



+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




<!-- Popular Tags -->

  // اعرض جميع الـ Tags الموجودة في كل الـ Blogs بعد حذف التكرار

  // مثلا:

  // [
  // "Travel",
  // "Beach",
  // "Summer",
  // "Vacation",
  // "Adventure",
  // "Luxury",
  // "Hotels",
  // "Photography",
  // "Food",
  // "Culture",
  // "Honeymoon",
  // "Winter",
  // "Safety",
  // "Backpack",
  // ]

  //   PopularTagsWidget

  // يعرض:

  // Travel
  // Adventure
  // Beach
  // Luxury
  // Photography
  // Food
  // Culture

  // ولما المستخدم يضغط:

  // Beach

  // يجيب أي Blog فيه:

  // details.postBody.tags.includes("Beach")










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










  // ==> بدل ما اعمل كده
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  //   country: "",
  //   age: undefined,
  //   city: "",
  //   state: "",
  //   zipCode: undefined,
  //   comment: "",
  // });


///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////


  // input لكل name اعمل كده احسن ليه =>> عشان انا عامل
  // ==> تمام setFormData فى ال [e.target.name] ده هو الى هيكون المتغير تمام ليه بردو عشان انا عمل كده name ف ال
  const [formData, setFormData] = useState({});


///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////


  //function handleChange FormData
  const handleChangeFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,     
    });
  };


///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////


    //Function handleSubmit in Data
  const handleSubmit = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.country ||
      !formData.age ||
      !formData.city ||
      !formData.email ||
      !formData.state ||
      !formData.zipCode
    ) {
      toastError("Please Fill Required Fields.");
      return;
    }

    // alert("Booking Confirmed Successfully!");
    Navigate("/BookingConfirmation_page");
  };










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
