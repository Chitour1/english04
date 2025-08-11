// unit1-data.js

export const LESSON_LIBRARY = {
    "unit-1": {
        title: "الوحدة الأولى: اللقاءات الأولى",
        words: [
            { en: 'hello', ar: 'مرحباً' }, { en: 'I', ar: 'أنا' }, { en: 'am', ar: 'أكون' }, { en: 'my', ar: 'ـي (للملكية)' },
            { en: 'name', ar: 'اسم' }, { en: 'this', ar: 'هذا/هذه' }, { en: 'is', ar: 'يكون/تكون' }, { en: 'brother', ar: 'أخ' },
            { en: 'he', ar: 'هو' }, { en: 'student', ar: 'طالب' }, { en: 'what', ar: 'ماذا' }, { en: 'your', ar: 'ـكَ/ـكِ' },
            { en: 'family', ar: 'عائلة' }, { en: 'father', ar: 'أب' }, { en: 'mother', ar: 'أم' }, { en: 'we', ar: 'نحن' },
            { en: 'are', ar: 'نكون' }, { en: 'from', ar: 'من' }, { en: 'not', ar: 'أداة نفي' }, { en: 'tourist', ar: 'سائح' },
            { en: 'here', ar: 'هنا' }, { en: 'conference', ar: 'مؤتمر' }, { en: 'these', ar: 'هؤلاء' }, { en: 'they', ar: 'هم/هن' },
            { en: 'friend', ar: 'صديق' }, { en: 'you', ar: 'أنت/أنتم' }, { en: 'that', ar: 'ذلك/تلك' }, { en: 'nice', ar: 'لطيف' },
            { en: 'bag', ar: 'حقيبة' }, { en: 'excuse me', ar: 'معذرة' }, { en: 'manager', ar: 'مدير' }, { en: 'office', ar: 'مكتب' },
            { en: 'his', ar: 'ـه' }, { en: 'desk', ar: 'مكتب (أثاث)' }, { en: 'big', ar: 'كبير' }, { en: 'brown', ar: 'بني' },
            { en: 'computer', ar: 'حاسوب' }, { en: 'lamp', ar: 'مصباح' }, { en: 'on', ar: 'على' }, { en: 'pen', ar: 'قلم' },
            { en: 'book', ar: 'كتاب' }, { en: 'there is', ar: 'يوجد (مفرد)' }, { en: 'there are', ar: 'يوجد (جمع)' }, { en: 'whose', ar: 'لمن' },
            { en: 'it', ar: 'هو/هي (لغير العاقل)' }, { en: 'her', ar: 'ـها' }, { en: 'black', ar: 'أسود' }, { en: 'key', ar: 'مفتاح' },
            { en: 'phone', ar: 'هاتف' }, { en: 'number', ar: 'رقم' }, { en: 'company', ar: 'شركة' }, { en: 'notebook', ar: 'دفتر' },
            { en: 'its', ar: 'ـه/ـها (لغير العاقل)' }, { en: 'blue', ar: 'أزرق' }, { en: 'zero', ar: '0' }, { en: 'one', ar: '1' },
            { en: 'two', ar: '2' }, { en: 'three', ar: '3' }, { en: 'four', ar: '4' }, { en: 'five', ar: '5' }, { en: 'six', ar: '6' },
            { en: 'seven', ar: '7' }, { en: 'eight', ar: '8' }, { en: 'nine', ar: '9' }, { en: 'ten', ar: '10' },
            { en: 'a / an', ar: 'أداة نكرة' }, { en: 'café', ar: 'مقهى' }, { en: 'coffee', ar: 'قهوة' }, { en: 'glass', ar: 'كوب' },
            { en: 'water', ar: 'ماء' }, { en: 'our', ar: 'ـنا' }, { en: 'cake', ar: 'كعكة' }, { en: 'beautiful', ar: 'جميل' },
            { en: 'those', ar: 'أولئك' }, { en: 'chocolate', ar: 'شوكولاتة' }, { en: 'there isn\'t', ar: 'لا يوجد (مفرد)' },
            { en: 'there aren\'t', ar: 'لا يوجد (جمع)' }, { en: 'sofa', ar: 'أريكة' }, { en: 'chair', ar: 'كرسي' }, { en: 'any', ar: 'أي' },
            { en: 'picture', ar: 'صورة' }, { en: 'wall', ar: 'جدار' }, { en: 'supermarket', ar: 'سوبر ماركت' }, { en: 'near', ar: 'قريب' },
            { en: 'restaurant', ar: 'مطعم' }
        ],
        lessons: {
            "lesson-1": {
                type: "teaching", title: "الدرس 1: أنا أحمد",
                story: `<p><strong class="text-indigo-600">Ahmed:</strong> Hello. I am Ahmed. This is my brother, Omar.</p><p><strong class="text-pink-600">Ali:</strong> My name is Ali. Is he a student?</p><p><strong class="text-indigo-600">Ahmed:</strong> Yes, he is. What is your name?</p><p><strong class="text-pink-600">Ali:</strong> My name is Ali. Is this your family?</p><p><strong class="text-indigo-600">Ahmed:</strong> Yes, this is my father and my mother.</p>`,
                words: [ { en: 'hello', ar: 'مرحباً' }, { en: 'I', ar: 'أنا' }, { en: 'am', ar: 'أكون' }, { en: 'my', ar: 'ـي' }, { en: 'name', ar: 'اسم' }, { en: 'this', ar: 'هذا/هذه' }, { en: 'is', ar: 'يكون' }, { en: 'brother', ar: 'أخ' }, { en: 'he', ar: 'هو' }, { en: 'student', ar: 'طالب' }, { en: 'what', ar: 'ماذا' }, { en: 'your', ar: 'ـكَ/ـكِ' }, { en: 'family', ar: 'عائلة' }, { en: 'father', ar: 'أب' }, { en: 'mother', ar: 'أم' } ],
                grammar: { title: "الفعل be (am/is) وصفات الملكية (my/your)", explanation: `<p>الفعل to be هو أهم فعل في اللغة الإنجليزية، ويُستخدم للتعريف بالهوية، الوظيفة، الحالة، أو الصفة. إنه فعل غير منتظم، مما يعني أن شكله يتغير بشكل كبير.</p><ul class="list-disc pr-6 mt-2 space-y-1"><li>مع الضمير I (أنا)، نستخدم دائماً <code class="en-text bg-purple-100 text-purple-800 p-1 rounded">am</code>. مثال: <span class="en-text">I am a teacher.</span></li><li>مع الضمائر <code class="en-text">he</code> (هو)، <code class="en-text">she</code> (هي)، <code class="en-text">it</code> (لغير العاقل)، والأسماء المفردة، نستخدم <code class="en-text bg-purple-100 text-purple-800 p-1 rounded">is</code>. مثال: <span class="en-text">He is a doctor.</span></li></ul><p class="mt-4">صفات الملكية (Possessive Adjectives) هي كلمات صغيرة تأتي قبل الاسم لتوضح لمن يعود هذا الشيء.</p><ul class="list-disc pr-6 mt-2 space-y-1"><li><code class="en-text bg-purple-100 text-purple-800 p-1 rounded">my</code> تعني أن الشيء يخصني. مثال: <span class="en-text">This is my book.</span></li><li><code class="en-text bg-purple-100 text-purple-800 p-1 rounded">your</code> تعني أن الشيء يخصك أنت. مثال: <span class="en-text">What is your name?</span></li></ul>`, examples: `` },
                styles: [ { ar: 'لتقديم نفسك:', en: ["Hello, I am [Name].", "My name is [Name]."] }, { ar: 'لتقديم شخص آخر:', en: ["This is my [family member]."] }, { ar: 'للسؤال عن اسم شخص:', en: ["What is your name?"] } ],
                exercise: { prompt: 'املأ الفراغات بـ am, is, my, or your:', questions: [ `I <input type="text" id="ex-q1" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> a student. <input type="text" id="ex-q2" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> name is Ali.`, `What <input type="text" id="ex-q3" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> <input type="text" id="ex-q4" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> name?`, `This <input type="text" id="ex-q5" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> <input type="text" id="ex-q6" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> brother. He <input type="text" id="ex-q7" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> a doctor.` ], answers: { 'ex-q1': 'am', 'ex-q2': 'my', 'ex-q3': 'is', 'ex-q4': 'your', 'ex-q5': 'is', 'ex-q6': 'my', 'ex-q7': 'is' } },
                repetition: [ "I am a designer.", "My name is Fatima.", "This is my father.", "He is a good student.", "What is your family name?", "Is this your brother?" ],
                pronunciation: `<p><strong>الاختصارات:</strong> في المحادثة، نختصر <span class="en-text">I am</span> إلى <span class="en-text font-bold">I'm</span> و <span class="en-text">What is</span> إلى <span class="en-text font-bold">What's</span>.</p><p class="mt-2"><strong>صوت /ð/:</strong> في كلمات مثل <span class="en-text">this, mother, father</span>. هذا الصوت يُنتج مع اهتزاز الأحبال الصوتية.</p>`
            },
            "lesson-2": {
                type: "teaching", title: "الدرس 2: نحن من مصر",
                story: `<p>Fatima and Sara are at a conference. They are from Egypt and Jordan. They are not tourists. They are friends. Fatima has a nice bag.</p>`,
                words: [ { en: 'we', ar: 'نحن' }, { en: 'are', ar: 'نكون' }, { en: 'from', ar: 'من' }, { en: 'not', ar: 'أداة نفي' }, { en: 'tourist', ar: 'سائح' }, { en: 'here', ar: 'هنا' }, { en: 'conference', ar: 'مؤتمر' }, { en: 'these', ar: 'هؤلاء' }, { en: 'they', ar: 'هم/هن' }, { en: 'friend', ar: 'صديق' }, { en: 'you', ar: 'أنت/أنتم' }, { en: 'that', ar: 'ذلك/تلك' }, { en: 'nice', ar: 'لطيف' }, { en: 'bag', ar: 'حقيبة' } ],
                grammar: { title: "الفعل be (are/isn't/aren't) وأسماء الإشارة", explanation: `<p><strong>صيغة الجمع والنفي:</strong> نستخدم <code class="en-text bg-purple-100 text-purple-800 p-1 rounded">are</code> مع الضمائر <code class="en-text">we, you, they</code>. للنفي، نضع <code class="en-text">not</code> بعد الفعل. الاختصارات شائعة: <code class="en-text">is not → isn't</code>, <code class="en-text">are not → aren't</code>.</p><p class="mt-4"><strong>أسماء الإشارة:</strong></p><ul class="list-disc pr-6 mt-2 space-y-1 en-text"><li><span class="font-bold">this</span> (هذا): للمفرد القريب.</li><li><span class="font-bold">that</span> (ذلك): للمفرد البعيد.</li><li><span class="font-bold">these</span> (هؤلاء): للجمع القريب.</li></ul>`, examples: `<p class="en-text">We are friends. → We <span class="font-semibold">aren't</span> tourists.</p><p class="en-text">He is the manager. → He <span class="font-semibold">isn't</span> the manager.</p>` },
                styles: [ { ar: 'للإشارة إلى بلدك:', en: ["I am from [Country]."] }, { ar: 'لتقديم مجموعة:', en: ["We are from...", "They are friends."] }, { ar: 'لنفي معلومة:', en: ["No, we aren't tourists."] } ],
                exercise: { prompt: 'اختر الكلمة الصحيحة:', questions: [ `They (is / <input type="text" id="ex-q1" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center">) from my company.`, `He (<input type="text" id="ex-q2" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> / aren't) my brother.`, `(<input type="text" id="ex-q3" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> / These) are my keys.` ], answers: { 'ex-q1': 'are', 'ex-q2': 'isn\'t', 'ex-q3': 'these' } },
                repetition: [ "We are from Saudi Arabia.", "They are not my friends.", "You aren't a tourist.", "This is a nice conference.", "That is my bag.", "These are my family members." ],
                pronunciation: `<p><strong>صوت /iː/ الطويل في <span class="en-text">these</span>:</strong> لاحظ الفرق بين الصوت القصير /ɪ/ في <span class="en-text">this</span> والصوت الطويل /iː/ في <span class="en-text">these</span>.</p>`
            },
            "review-1-1": {
                type: "review", title: "درس المراجعة 1.1", wordCount: 29, reviewCount: 15,
                story: `<p><strong class="text-indigo-600">Ahmed:</strong> Hello. My name is Ahmed. What is your name?</p><p><strong class="text-pink-600">Omar:</strong> My name is Omar. I am a student.</p><p><strong class="text-indigo-600">Ahmed:</strong> Is this your friend?</p><p><strong class="text-pink-600">Omar:</strong> Yes, he is my friend. We are from Egypt.</p>`,
                grammar: { title: "مراجعة شاملة للفعل be (am, is, are)", explanation: `<p>تذكر أن الفعل be يتغير شكله حسب الفاعل.</p><ul class="list-disc pr-6 mt-2 space-y-2 en-text"><li>I → <span class="font-bold">am</span></li><li>He / She / It / اسم مفرد → <span class="font-bold">is</span></li><li>We / You / They / اسم جمع → <span class="font-bold">are</span></li></ul>` },
                styles: [ { ar: 'تقديم النفس:', en: ["Hello, I am...", "My name is..."] }, { ar: 'تقديم الآخرين:', en: ["This is my friend/brother..."] }, { ar: 'السؤال عن الهوية:', en: ["What is your name?", "Are you a student?"] } ],
                exercise: { prompt: 'املأ الفراغات بـ am, is, or are:', questions: [ `We <input type="text" id="ex-q1" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> friends.`, `What <input type="text" id="ex-q2" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> your name?`, `I <input type="text" id="ex-q3" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> not a tourist.`, `This <input type="text" id="ex-q4" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> my family.` ], answers: { 'ex-q1': 'are', 'ex-q2': 'is', 'ex-q3': 'am', 'ex-q4': 'is' } },
                repetition: [ "I am from Jordan.", "He is my brother.", "She is a student.", "We are at a conference.", "They are my friends.", "What is this? It is a bag." ],
                pronunciation: `<p><strong>الاختصارات:</strong> تذكر أن تختصر <span class="en-text">is not</span> إلى <span class="en-text">isn't</span> و <span class="en-text">are not</span> إلى <span class="en-text">aren't</span>.</p>`
            },
            "lesson-3": {
                type: "teaching", title: "الدرس 3: مكتب المدير",
                story: `<p>This is the manager's office. His name is Mr. Hassan. His desk is big and brown. There is a computer and a lamp on the desk. There are two pens and three books. My friend Omar is not here.</p>`,
                words: [ { en: 'excuse me', ar: 'معذرة' }, { en: 'manager', ar: 'مدير' }, { en: 'office', ar: 'مكتب' }, { en: 'his', ar: 'ـه' }, { en: 'desk', ar: 'مكتب (أثاث)' }, { en: 'big', ar: 'كبير' }, { en: 'brown', ar: 'بني' }, { en: 'computer', ar: 'حاسوب' }, { en: 'lamp', ar: 'مصباح' }, { en: 'on', ar: 'على' }, { en: 'pen', ar: 'قلم' }, { en: 'book', ar: 'كتاب' }, { en: 'there is / there are', ar: 'يوجد' } ],
                grammar: { title: "الملكية (his, 's) و There is/are", explanation: `<p><strong>الملكية:</strong> نستخدم <code class="en-text bg-purple-100 text-purple-800 p-1 rounded">his</code> للمذكر و <code class="en-text bg-purple-100 text-purple-800 p-1 rounded">'s</code> للاسم.</p><p class="mt-4"><strong>There is / There are:</strong> لوصف وجود الأشياء.</p>`, examples: `<p class="en-text">This is <span class="font-semibold">his</span> car.</p><p class="en-text">This is the manager<span class="font-semibold">'s</span> desk.</p><p class="en-text"><span class="font-semibold">There is</span> a computer.</p><p class="en-text"><span class="font-semibold">There are</span> three books.</p>` },
                styles: [ { ar: 'للسؤال بأدب:', en: ["Excuse me, are you...?"] }, { ar: 'لوصف ممتلكات شخص:', en: ["This is [Name]'s [object]."] }, { ar: 'لوصف محتويات مكان:', en: ["There is a... and there are two..."] } ],
                exercise: { prompt: "املأ الفراغات بـ his, 's, There is, or There are:", questions: [ `This is my brother. This is <input type="text" id="ex-q1" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> car.`, `Where is the manager<input type="text" id="ex-q2" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> office?`, `<input type="text" id="ex-q3" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-24 text-center"> a pen on my desk.`, `<input type="text" id="ex-q4" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-24 text-center"> two big lamps.` ], answers: { 'ex-q1': 'his', 'ex-q2': '\'s', 'ex-q3': 'there is', 'ex-q4': 'there are' } },
                repetition: [ "His name is Ali.", "This is my father's car.", "There is a book on the table.", "There are three friends in my car.", "The manager's desk is brown.", "His computer is new." ],
                pronunciation: `<p><strong>صوت <span class="en-text">'s</span>:</strong> له نفس أصوات الجمع (/s/, /z/, /ɪz/).</p>`
            },
            "lesson-4": {
                type: "teaching", title: "الدرس 4: حقيبة فاطمة",
                story: `<p><strong class="text-indigo-600">Ali:</strong> Whose bag is this? It is black.</p><p><strong class="text-pink-600">Ahmed:</strong> It is Fatima's bag. Her keys and her phone are in the bag.</p><p><strong class="text-indigo-600">Ali:</strong> What is her phone number?</p><p><strong class="text-pink-600">Ahmed:</strong> Her number is 555-0123. The company's logo is on her notebook. Its color is blue. That is her desk.</p>`,
                words: [ { en: 'whose', ar: 'لمن' }, { en: 'it', ar: 'هو/هي (لغير العاقل)' }, { en: 'her', ar: 'ـها' }, { en: 'black', ar: 'أسود' }, { en: 'key', ar: 'مفتاح' }, { en: 'phone', ar: 'هاتف' }, { en: 'number', ar: 'رقم' }, { en: 'company', ar: 'شركة' }, { en: 'notebook', ar: 'دفتر' }, { en: 'its', ar: 'ـه/ـها (لغير العاقل)' }, { en: 'blue', ar: 'أزرق' }, { en: 'zero-ten', ar: '0-10' } ],
                grammar: { title: "صفات الملكية (her, its) والسؤال بـ Whose", explanation: `<p><strong>صفات الملكية:</strong> <code class="en-text bg-purple-100 text-purple-800 p-1 rounded">her</code> للمؤنث و <code class="en-text bg-purple-100 text-purple-800 p-1 rounded">its</code> لغير العاقل.</p><p class="mt-4"><strong>السؤال عن الملكية:</strong> نستخدم <code class="en-text bg-purple-100 text-purple-800 p-1 rounded">Whose</code>.</p>`, examples: `<p class="en-text"><span class="font-semibold">Whose</span> book is this? → It's Sara's book.</p><p class="en-text"><span class="font-semibold">Whose</span> keys are these? → They are his keys.</p>` },
                styles: [ { ar: 'للسؤال عن الملكية:', en: ["Whose [object] is this?"] }, { ar: 'للحديث عن ممتلكات أنثى:', en: ["This is her bag."] }, { ar: 'للحديث عن ممتلكات شيء/شركة:', en: ["Its color is blue."] } ],
                exercise: { prompt: 'اختر الكلمة الصحيحة:', questions: [ `This is my sister. This is (his / <input type="text" id="ex-q1" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center">) notebook.`, `(<input type="text" id="ex-q2" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> / What) phone is this?`, `The cat is white. (<input type="text" id="ex-q3" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> / It's) name is Lulu.` ], answers: { 'ex-q1': 'her', 'ex-q2': 'whose', 'ex-q3': 'its' } },
                repetition: [ "Her name is Fatima.", "Whose keys are these?", "This is her black bag.", "Her phone number is 555-9876.", "The company is new. Its office is big.", "I have her notebook." ],
                pronunciation: `<p><strong><span class="en-text">its</span> مقابل <span class="en-text">it's</span>:</strong> <span class="en-text">it's = it is</span>. <span class="en-text">its</span> للملكية. النطق متطابق.</p>`
            },
            "review-1-2": {
                type: "review", title: "درس المراجعة 1.2", wordCount: 54, reviewCount: 20,
                story: `<p><strong class="text-indigo-600">Omar:</strong> Excuse me, are you the manager?</p><p><strong class="text-pink-600">Hassan:</strong> No, I'm not. His office is that big office. His desk is brown.</p><p><strong class="text-indigo-600">Omar:</strong> What is on his desk?</p><p><strong class="text-pink-600">Hassan:</strong> There is a computer, three books, and one black pen.</p><p><strong class="text-indigo-600">Omar:</strong> Whose notebook is this?</p><p><strong class="text-pink-600">Hassan:</strong> It is my notebook.</p>`,
                grammar: { title: "مراجعة طرق التعبير عن الملكية", explanation: `<p>هناك طريقتان: <strong>صفات الملكية</strong> (<span class="en-text">my, your, his, her, its</span>) و<strong>إضافة 's للاسم</strong> (<span class="en-text">the manager's office</span>).</p>` },
                styles: [ { ar: 'السؤال عن الملكية:', en: ["Whose [object] is this?"] }, { ar: 'الإجابة عن الملكية:', en: ["It's [Name]'s [object].", "It's his/her [object]."] } ],
                exercise: { prompt: "أعد كتابة الجمل باستخدام 's أو صفة ملكية:", questions: [ `The bag belongs to Sara. → It is <input type="text" id="ex-q1" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-32 text-left" dir="ltr">.`, `The car belongs to the manager. → It is <input type="text" id="ex-q2" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-32 text-left" dir="ltr">.`, `The name of the company is "Global". → <input type="text" id="ex-q3" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-32 text-left" dir="ltr"> name is "Global".` ], answers: { 'ex-q1': "sara's bag", 'ex-q2': "his car", 'ex-q3': "its" } },
                repetition: [ "Whose computer is this? It's his computer.", "This is my friend's phone.", "Her office is big.", "What is your company's name?", "His car is blue.", "This is the student's book." ],
                pronunciation: `<p><strong><span class="en-text">Whose</span> مقابل <span class="en-text">Who's</span>:</strong> النطق متطابق، لكن <span class="en-text">Who's</span> هي اختصار لـ <span class="en-text">Who is</span>.</p>`
            },
            "lesson-5": {
                type: "teaching", title: "الدرس 5: في المقهى",
                story: `<p>Fatima is in a nice café with her friends. They are at a table. There are two coffees and three glasses of water on their table. The cakes are beautiful. Fatima has a chocolate cake. Her brother is not here.</p>`,
                words: [ { en: 'a / an', ar: 'أداة نكرة' }, { en: 'café', ar: 'مقهى' }, { en: 'coffee', ar: 'قهوة' }, { en: 'glass', ar: 'كوب' }, { en: 'water', ar: 'ماء' }, { en: 'our', ar: 'ـنا' }, { en: 'cake', ar: 'كعكة' }, { en: 'beautiful', ar: 'جميل' }, { en: 'those', ar: 'أولئك' }, { en: 'chocolate', ar: 'شوكولاتة' } ],
                grammar: { title: "الأسماء الجمع (-s, -es) وأدوات النكرة (a/an)", explanation: `<p><strong>الأسماء الجمع:</strong> نضيف <code class="en-text bg-purple-100 text-purple-800 p-1 rounded">-s</code> لمعظم الأسماء، و <code class="en-text bg-purple-100 text-purple-800 p-1 rounded">-es</code> للأسماء المنتهية بـ s, x, ch, sh.</p><p class="mt-4"><strong>أدوات النكرة:</strong> <code class="en-text bg-purple-100 text-purple-800 p-1 rounded">a</code> قبل الأصوات الساكنة، و <code class="en-text bg-purple-100 text-purple-800 p-1 rounded">an</code> قبل الأصوات المتحركة.</p>`, examples: `<p class="en-text">book → book<span class="font-semibold">s</span></p><p class="en-text">glass → glass<span class="font-semibold">es</span></p>` },
                styles: [ { ar: 'لطلب أكثر من شيء واحد:', en: ["Two coffees, please."] }, { ar: 'للإشارة إلى أشياء متعددة:', en: ["Those are beautiful cakes."] } ],
                exercise: { prompt: 'اكتب صيغة الجمع للكلمات التالية:', questions: [ `car → <input type="text" id="ex-q1" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-24 text-center">`, `watch → <input type="text" id="ex-q2" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-24 text-center">`, `box → <input type="text" id="ex-q3" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-24 text-center">` ], answers: { 'ex-q1': 'cars', 'ex-q2': 'watches', 'ex-q3': 'boxes' } },
                repetition: [ "I have two brothers.", "She wants three books.", "We need four glasses.", "They have two cars.", "There are five students in the class.", "He reads many books." ],
                pronunciation: `<p><strong>أصوات الجمع s:</strong> لها ثلاثة أصوات: /s/ (books), /z/ (cars), و /ɪz/ (glasses).</p>`
            },
            "lesson-6": {
                type: "teaching", title: "الدرس 6: لا يوجد بنك",
                story: `<p><strong class="text-indigo-600">Ahmed:</strong> Is there a supermarket near here?</p><p><strong class="text-pink-600">Fatima:</strong> No, there isn't. My office is in a small building. It's a nice office, but there isn't a sofa.</p><p><strong class="text-indigo-600">Ahmed:</strong> What is in your office?</p><p><strong class="text-pink-600">Fatima:</strong> There is a desk and a chair. There aren't any pictures on the wall. But there is a good restaurant near the office.</p>`,
                words: [ { en: 'there isn\'t', ar: 'لا يوجد (مفرد)' }, { en: 'there aren\'t', ar: 'لا يوجد (جمع)' }, { en: 'sofa', ar: 'أريكة' }, { en: 'chair', ar: 'كرسي' }, { en: 'any', ar: 'أي' }, { en: 'picture', ar: 'صورة' }, { en: 'wall', ar: 'جدار' }, { en: 'supermarket', ar: 'سوبر ماركت' }, { en: 'near', ar: 'قريب' }, { en: 'restaurant', ar: 'مطعم' } ],
                grammar: { title: "النفي والاستفهام مع There is/are", explanation: `<p><strong>النفي:</strong> <code class="en-text bg-purple-100 text-purple-800 p-1 rounded">There isn't a computer.</code> / <code class="en-text bg-purple-100 text-purple-800 p-1 rounded">There aren't any chairs.</code></p><p class="mt-4"><strong>السؤال:</strong> <code class="en-text bg-purple-100 text-purple-800 p-1 rounded">Is there a bank?</code> / <code class="en-text bg-purple-100 text-purple-800 p-1 rounded">Are there any restaurants?</code></p>`, examples: `<p class="en-text">Yes, there is. / No, there isn't.</p><p class="en-text">Yes, there are. / No, there aren't.</p>` },
                styles: [ { ar: 'لوصف عدم وجود شيء:', en: ["There isn't a/an [object]."] }, { ar: 'للسؤال عن وجود مكان:', en: ["Is there a [place] near here?"] } ],
                exercise: { prompt: 'حوّل الجمل التالية إلى سؤال:', questions: [ `There is a cat in the garden. → <input type="text" id="ex-q1" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-64 text-left" dir="ltr">?`, `There are two cars in the street. → <input type="text" id="ex-q2" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-64 text-left" dir="ltr">?` ], answers: { 'ex-q1': 'is there a cat in the garden', 'ex-q2': 'are there any cars in the street' } },
                repetition: [ "There isn't a sofa in my office.", "There aren't any students in the classroom.", "Is there a supermarket here? Yes, there is.", "Are there any good restaurants? No, there aren't.", "In my bag, there isn't a pen.", "There aren't any pictures on the wall." ],
                pronunciation: `<p><strong>النبرة الصاعدة:</strong> في أسئلة نعم/لا مثل <span class="en-text">Is there a bank?</span>، ترتفع نبرة الصوت في النهاية.</p>`
            },
            "review-1-3": {
                type: "review", title: "درس المراجعة 1.3", wordCount: 74, reviewCount: 20,
                story: `<p>My mother and father are not here. They are in a nice restaurant. My brother is at home. His phone number is 223-4455. Her name is Fatima. Her bag is blue. Our family is big. We are not tourists.</p>`,
                grammar: { title: "مراجعة صفات الملكية", explanation: `<p>تأتي صفات الملكية دائماً قبل الاسم.</p><ul class="list-disc pr-6 mt-2 space-y-1 en-text font-semibold"><li>my, your, his, her, its, our</li></ul>` },
                styles: [ { ar: 'وصف العائلة:', en: ["Our family is big."] }, { ar: 'السؤال عن معلومات شخصية:', en: ["What is her phone number?"] } ],
                exercise: { prompt: 'املأ الفراغات بصفة الملكية الصحيحة:', questions: [ `I have a brother. <input type="text" id="ex-q1" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> name is Omar.`, `We have a house. <input type="text" id="ex-q2" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> house is big.`, `Sara has a bag. <input type="text" id="ex-q3" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> bag is black.` ], answers: { 'ex-q1': 'his', 'ex-q2': 'our', 'ex-q3': 'her' } },
                repetition: [ "My father is a manager.", "What is your phone number?", "His brother is a student.", "Her family is from Egypt.", "Our office is near the supermarket.", "Its name is 'The Good Company'." ],
                pronunciation: `<p><strong>صوت <span class="en-text">our</span>:</strong> تُنطق مثل <span class="en-text">hour</span> (/aʊər/).</p>`
            },
            "review-1-4": {
                type: "review", title: "درس المراجعة 1.4", wordCount: 74, reviewCount: 19,
                story: `<p><strong class="text-indigo-600">Ali:</strong> We are in a café. Are those cakes chocolate cakes?</p><p><strong class="text-pink-600">Fatima:</strong> Yes. There are beautiful pictures on the wall.</p><p><strong class="text-indigo-600">Ali:</strong> Is there a sofa here?</p><p><strong class="text-pink-600">Fatima:</strong> No, there isn't a sofa, but there is a chair. There are two glasses of water on the table. There isn't any coffee.</p>`,
                grammar: { title: "مراجعة There is/are", explanation: `<p>أساسية لوصف الأماكن.</p><ul class="list-disc pr-6 mt-2 space-y-1"><li><strong>الإثبات:</strong> <span class="en-text">There is/are...</span></li><li><strong>النفي:</strong> <span class="en-text">There isn't/aren't...</span></li><li><strong>السؤال:</strong> <span class="en-text">Is/Are there...?</span></li></ul>` },
                styles: [ { ar: 'وصف مكان:', en: ["In my office, there is a desk..."] }, { ar: 'السؤال عن وجود شيء:', en: ["Is there a restaurant near here?"] } ],
                exercise: { prompt: "املأ الفراغات بـ is, isn't, are, or aren't:", questions: [ `There <input type="text" id="ex-q1" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-16 text-center"> a big sofa in my office.`, `Are there any pictures? No, there <input type="text" id="ex-q2" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-16 text-center">.`, `There <input type="text" id="ex-q3" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-16 text-center"> two beautiful cakes.` ], answers: { 'ex-q1': 'isn\'t', 'ex-q2': 'aren\'t', 'ex-q3': 'are' } },
                repetition: [ "There is a beautiful picture on the wall.", "There isn't a supermarket near here.", "There are two coffees on our table.", "There aren't any chairs in this room.", "Is there a café near the office?", "Are there any pens in your bag?" ],
                pronunciation: `<p><strong>ربط الكلمات:</strong> نربط <span class="en-text">There is</span> لتبدو مثل <span class="en-text">There's (/ðeəz/)</span>.</p>`
            },
            "additional-review-1-1": {
                type: "additional-review", title: "مراجعة إضافية 1.1: في المكتب",
                story: `<p>Ali is a manager in a big company. This is his office. There is a brown desk and a black chair. There are three books and many pens on his desk. His computer is new. Its color is blue. His friend, Omar, is also a manager. His office is near Ali's office.</p>`,
                grammar: { title: "مراجعة الفعل be", explanation: `<p>يصف ما هو الشيء أو الشخص، وليس ما يفعله.</p><ul class="list-disc pr-6 mt-2 space-y-1"><li><strong>الإثبات:</strong> <span class="en-text">I am, He/She/It is, We/You/They are.</span></li><li><strong>النفي:</strong> <span class="en-text">I am not, He/She/It isn't, We/You/They aren't.</span></li></ul>` },
                styles: [ { ar: 'التعريف بالوظيفة:', en: ["I am a manager."] }, { ar: 'وصف شيء:', en: ["My computer is new."] } ],
                exercise: { prompt: "اكتب الجملة الصحيحة:", questions: [ `My friend Omar / a student. (✗) → <input type="text" id="ex-q1" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-64 text-left" dir="ltr">.`, `We / good friends. (✓) → <input type="text" id="ex-q2" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-64 text-left" dir="ltr">.` ], answers: { 'ex-q1': "my friend omar isn't a student", 'ex-q2': 'we are good friends' } },
                repetition: [ "I am not a student.", "He is a manager in a big company.", "Her office is not near here.", "We are good friends.", "They aren't from my country.", "This chair is brown." ],
                pronunciation: `<p><strong>النبرة في الجملة:</strong> الكلمات المهمة تحمل النبرة الأقوى. <span class="en-text">My com<strong>PU</strong>ter is <strong>NEW</strong>.</span></p>`
            },
            "additional-review-1-2": {
                type: "additional-review", title: "مراجعة إضافية 1.2: لقاء في مقهى",
                story: `<p><strong class="text-indigo-600">Ahmed:</strong> Excuse me, are you Sara?</p><p><strong class="text-pink-600">Sara:</strong> Yes, I am. And you are Ahmed. Nice to meet you.</p><p><strong class="text-indigo-600">Ahmed:</strong> This is a nice café. There are beautiful pictures on the wall. Whose bag is that? Is it your bag?</p><p><strong class="text-pink-600">Sara:</strong> No, it isn't my bag. My bag is here. That is her bag, my sister's bag. She is over there. We are here for coffee and cake.</p>`,
                grammar: { title: "مراجعة تكوين الأسئلة", explanation: `<p><strong>أسئلة نعم/لا</strong> (تبدأ بـ <span class="en-text">Is, Are</span>) و<strong>أسئلة المعلومات</strong> (تبدأ بـ <span class="en-text">What, Whose</span>).</p>` },
                styles: [ { ar: 'بدء محادثة:', en: ["Excuse me, are you...?"] }, { ar: 'الرد على التعارف:', en: ["Nice to meet you."] } ],
                exercise: { prompt: "رتب الكلمات لتكوين أسئلة:", questions: [ `your / is / what / name /? → <input type="text" id="ex-q1" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-48 text-left" dir="ltr">?`, `bag / this / whose / is /? → <input type="text" id="ex-q2" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-48 text-left" dir="ltr">?` ], answers: { 'ex-q1': 'what is your name', 'ex-q2': 'whose bag is this' } },
                repetition: [ "What is your phone number?", "Whose book is this?", "Are you from Egypt?", "Is he your brother?", "Are these your keys?", "Is there a restaurant near here?" ],
                pronunciation: `<p><strong>النبرة في الأسئلة:</strong> أسئلة نعم/لا لها نبرة صاعدة (↗). أسئلة المعلومات لها نبرة هابطة (↘).</p>`
            },
            "additional-review-1-3": {
                type: "additional-review", title: "مراجعة إضافية 1.3: محادثة عائلية",
                story: `<p>This is our family house. It is not big. There are three bedrooms. There isn't a supermarket near our house, but there is a good restaurant. My keys, my phone, and my notebook are in my bag. My father's keys are here, on the table.</p>`,
                grammar: { title: "مراجعة شاملة للملكية", explanation: `<p>تعلمنا صفات الملكية (<span class="en-text">my, your, his, her, its, our</span>) واستخدام <span class="en-text">'s</span> مع الأسماء.</p>` },
                styles: [ { ar: 'وصف المنزل:', en: ["There are three bedrooms."] }, { ar: 'الربط بين جملتين:', en: ["..., but there is a good restaurant."] } ],
                exercise: { prompt: "اختر الكلمة الصحيحة للملكية:", questions: [ `I am a student. This is <input type="text" id="ex-q1" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> book.`, `He is a manager. This is <input type="text" id="ex-q2" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> office.`, `We are a family. This is <input type="text" id="ex-q3" class="border-b-2 border-gray-300 focus:border-orange-500 outline-none w-12 text-center"> house.` ], answers: { 'ex-q1': 'my', 'ex-q2': 'his', 'ex-q3': 'our' } },
                repetition: [ "My keys are in the car.", "His father is a doctor.", "Her notebook is blue.", "Our house is not big.", "Their company is in London.", "This is the student's pen." ],
                pronunciation: `<p><strong>صوت <span class="en-text">our</span>:</strong> تُنطق مثل <span class="en-text">hour</span> (/aʊər/).</p>`
            },
            "word-basket-1": {
                type: "word-basket", title: "سلة الكلمات: الوحدة الأولى"
            }
        }
    }
};
    </script>
    <script>
        // --- UTILITY FUNCTIONS ---
        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        // --- GLOBAL STATE ---
        const mainContent = document.getElementById('main-content');
        const lessonNav = document.getElementById('lesson-nav');

        // --- RENDER FUNCTIONS ---
        function renderLesson(unitId, lessonId) {
            const lesson = unitsData[unitId].lessons[lessonId];
            if (!lesson) return;

            if (lesson.type === 'teaching') renderTeachingLesson(unitId, lessonId);
            else if (lesson.type === 'review' || lesson.type === 'additional-review') renderReviewLesson(unitId, lessonId);
            else if (lesson.type === 'word-basket') renderWordBasket(unitId, lessonId);
            
            updateActiveLink(lessonId);
        }

        function renderTeachingLesson(unitId, lessonId) {
            const unit = unitsData[unitId];
            const lesson = unit.lessons[lessonId];
            mainContent.innerHTML = `
                <header class="mb-8"><h1 class="text-4xl font-bold text-gray-900 leading-tight">${lesson.title}</h1><p class="text-2xl text-gray-600 mt-2">${unit.title}</p></header>
                <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div class="card xl:col-span-2"><div class="p-6 card-content"><div class="flex justify-between items-center mb-4"><h3 class="text-2xl font-bold text-blue-700">1. القصة</h3><div class="speak-btn" onclick="speakText(document.getElementById('story-content').innerText, 'en-US')"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg></div></div><div id="story-content" class="space-y-3 text-lg en-text">${lesson.story}</div></div></div>
                    <div class="card"><div class="p-6 card-content"><div class="flex justify-between items-center mb-4"><h3 class="text-2xl font-bold text-green-700">2. الكلمات الجديدة</h3><div class="speak-btn" onclick="speakText(document.getElementById('new-words-content').innerText, 'en-US')"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg></div></div><div id="new-words-content" class="space-y-2 text-md">${lesson.words.map(w => `<p><span class="en-text font-semibold">${w.en}</span>: ${w.ar}</p>`).join('')}</div></div></div>
                    <div class="card xl:col-span-3"><div class="p-6 card-content"><div class="flex justify-between items-center mb-4"><h3 class="text-2xl font-bold text-purple-700">3. قاعدة جديدة: ${lesson.grammar.title}</h3></div><div class="space-y-4 text-lg">${lesson.grammar.explanation}<div id="grammar-content" class="mt-4 border-t pt-4 space-y-2 en-text">${lesson.grammar.examples}</div></div></div></div>
                    <div class="card"><div class="p-6 card-content"><div class="flex justify-between items-center mb-4"><h3 class="text-2xl font-bold text-teal-700">4. أساليب وتراكيب</h3><div class="speak-btn" onclick="speakText(document.getElementById('styles-content').innerText, 'en-US')"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg></div></div><div id="styles-content" class="space-y-3">${lesson.styles.map(s => `<div><p class="text-gray-600" dir="rtl">${s.ar}</p>${s.en.map(phrase => `<p class="font-semibold en-text">${phrase}</p>`).join('')}</div>`).join('')}</div></div></div>
                    <div class="card"><div class="p-6 card-content"><h3 class="text-2xl font-bold text-orange-700 mb-4">5. تمرين</h3><p class="mb-4">${lesson.exercise.prompt}</p><div class="space-y-3 en-text text-lg">${lesson.exercise.questions.map(q => `<p>${q}</p>`).join('')}</div></div><div class="p-6 pt-0"><button onclick="checkExercise('${unitId}', '${lessonId}')" class="mt-6 w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">تحقق</button><div id="exercise-feedback" class="mt-4 text-center font-semibold h-6"></div></div></div>
                    <div class="card" id="repetition-card"><div class="p-6 card-content" id="repetition-content-area">
                        <div class="flex justify-between items-center mb-4"><h3 class="text-2xl font-bold text-red-700">6. جمل للتكرار</h3></div>
                        ${renderRepetitionList(unitId, lessonId)}
                    </div></div>
                    <div class="card xl:col-span-3"><div class="p-6 card-content"><h3 class="text-2xl font-bold text-yellow-700 mb-4">7. النطق</h3><div class="space-y-3 text-lg">${lesson.pronunciation}</div></div></div>
                </div>`;
        }

        function renderReviewLesson(unitId, lessonId) {
            const unit = unitsData[unitId];
            const lesson = unit.lessons[lessonId];
            const isAdditional = lesson.type === 'additional-review';
            mainContent.innerHTML = `
                <header class="mb-8"><h1 class="text-4xl font-bold leading-tight ${isAdditional ? 'text-green-800' : 'text-blue-800'}">${lesson.title}</h1><p class="text-2xl text-gray-600 mt-2">${unit.title}</p></header>
                <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    ${lesson.wordCount ? `<div class="card xl:col-span-3"><div class="p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700" role="alert"><p class="font-bold">عداد المراجعة</p><p>لقد تعلمت حتى الآن <strong>${lesson.wordCount}</strong> كلمة. في هذا الدرس، سنراجع <strong>${lesson.reviewCount}</strong> كلمة منها.</p></div></div>` : ''}
                    <div class="card xl:col-span-2"><div class="p-6 card-content"><div class="flex justify-between items-center mb-4"><h3 class="text-2xl font-bold text-blue-700">القصة</h3><div class="speak-btn" onclick="speakText(document.getElementById('story-content').innerText, 'en-US')"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg></div></div><div id="story-content" class="space-y-3 text-lg en-text">${lesson.story}</div></div></div>
                    <div class="card row-span-2"><div class="p-6 card-content"><h3 class="text-2xl font-bold text-purple-700 mb-4">تركيز على القاعدة: ${lesson.grammar.title}</h3><div class="space-y-4 text-lg">${lesson.grammar.explanation}</div></div></div>
                    <div class="card xl:col-span-2"><div class="p-6 card-content"><h3 class="text-2xl font-bold text-teal-700 mb-4">أساليب وتراكيب</h3><div id="styles-content" class="space-y-3">${lesson.styles.map(s => `<div><p class="text-gray-600" dir="rtl">${s.ar}</p>${s.en.map(phrase => `<p class="font-semibold en-text">${phrase}</p>`).join('')}</div>`).join('')}</div></div></div>
                    <div class="card"><div class="p-6 card-content"><h3 class="text-2xl font-bold text-orange-700 mb-4">تمرين</h3><p class="mb-4">${lesson.exercise.prompt}</p><div class="space-y-3 en-text text-lg">${lesson.exercise.questions.map(q => `<p>${q}</p>`).join('')}</div></div><div class="p-6 pt-0"><button onclick="checkExercise('${unitId}', '${lessonId}')" class="mt-6 w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">تحقق</button><div id="exercise-feedback" class="mt-4 text-center font-semibold h-6"></div></div></div>
                    <div class="card" id="repetition-card"><div class="p-6 card-content" id="repetition-content-area">
                        <div class="flex justify-between items-center mb-4"><h3 class="text-2xl font-bold text-red-700">جمل للتكرار</h3></div>
                        ${renderRepetitionList(unitId, lessonId)}
                    </div></div>
                    <div class="card xl:col-span-3"><div class="p-6 card-content"><h3 class="text-2xl font-bold text-yellow-700 mb-4">النطق</h3><div class="space-y-3 text-lg">${lesson.pronunciation}</div></div></div>
                </div>`;
        }
        
        // --- REPETITION PRACTICE FUNCTIONS ---
        function renderRepetitionList(unitId, lessonId) {
            const lesson = unitsData[unitId].lessons[lessonId];
            return `
                <div id="repetition-list" class="space-y-2 text-lg en-text">
                    ${lesson.repetition.map((s, i) => `<p>${i + 1}. ${s}</p>`).join('')}
                </div>
                <button onclick="startRepetitionPractice('${unitId}', '${lessonId}')" class="mt-6 w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">ابدأ تمرين التكرار</button>
            `;
        }

        function startRepetitionPractice(unitId, lessonId) {
            const contentArea = document.getElementById('repetition-content-area');
            const sentences = unitsData[unitId].lessons[lessonId].repetition;
            let currentIndex = 0;
            let playbackRate = 1.0;

            function renderPracticeUI() {
                const sentence = sentences[currentIndex];
                contentArea.innerHTML = `
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-2xl font-bold text-red-700">تمرين التكرار</h3>
                        <span class="text-gray-600 font-semibold">${currentIndex + 1} / ${sentences.length}</span>
                    </div>
                    <div class="text-center my-6">
                        <p class="en-text text-3xl font-bold text-gray-800">${sentence}</p>
                    </div>
                    <div class="flex items-center justify-center space-x-4 mb-6">
                        <span class="text-sm">بطيء</span>
                        <input type="range" min="0.5" max="1.5" value="${playbackRate}" step="0.25" class="w-1/2" id="speed-control">
                        <span class="text-sm">سريع</span>
                        <div class="speak-btn" id="play-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg>
                        </div>
                    </div>
                    <p class="text-center text-gray-600 mb-2">كرر الجملة 4 مرات:</p>
                    <div class="flex justify-center space-x-4 mb-6" id="repetition-tracker">
                        ${[...Array(4)].map(() => `<div class="repetition-circle bg-gray-200 border-2 border-gray-300" onclick="this.classList.toggle('bg-green-400')"></div>`).join('')}
                    </div>
                    <div class="flex justify-between">
                        <button id="prev-btn" class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">&lt; السابق</button>
                        <button onclick="renderLesson('${unitId}', '${lessonId}')" class="px-4 py-2 text-sm text-gray-600 hover:underline">العودة إلى القائمة</button>
                        <button id="next-btn" class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">التالي &gt;</button>
                    </div>
                `;

                document.getElementById('play-btn').onclick = () => speakText(sentence, 'en-US', playbackRate);
                document.getElementById('speed-control').onchange = (e) => playbackRate = parseFloat(e.target.value);
                
                document.getElementById('prev-btn').onclick = () => {
                    currentIndex = (currentIndex - 1 + sentences.length) % sentences.length;
                    renderPracticeUI();
                };
                document.getElementById('next-btn').onclick = () => {
                    currentIndex = (currentIndex + 1) % sentences.length;
                    renderPracticeUI();
                };
            }
            renderPracticeUI();
        }

        function renderWordBasket(unitId, lessonId) {
            const unit = unitsData[unitId];
            const lesson = unit.lessons[lessonId];
            const words = unit.words;

            mainContent.innerHTML = `
                <header class="mb-8"><h1 class="text-4xl font-bold text-yellow-800 leading-tight">${lesson.title}</h1><p class="text-2xl text-gray-600 mt-2">${unit.title}</p></header>
                <div class="card p-6">
                    <h2 class="text-2xl font-bold text-yellow-700 mb-4">اختر نشاطًا لمراجعة ${words.length} كلمة</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <button onclick="startFlashcardMode('${unitId}', 'en-ar')" class="p-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">بطاقات تعليمية (إنجليزي - عربي)</button>
                        <button onclick="startFlashcardMode('${unitId}', 'ar-en')" class="p-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition">بطاقات تعليمية (عربي - إنجليزي)</button>
                        <button onclick="startMatchingMode('${unitId}')" class="p-4 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition">تمرين الربط</button>
                        <button onclick="startQuizMode('${unitId}')" class="p-4 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition">اختبار الاختيار من متعدد</button>
                    </div>
                    <div id="word-activity-container" class="bg-gray-50 p-4 rounded-lg min-h-[300px]">
                        <p class="text-center text-gray-500">اختر أحد الأنشطة أعلاه للبدء.</p>
                    </div>
                </div>`;
        }

        // --- WORD BASKET ACTIVITIES ---
        function startFlashcardMode(unitId, direction) {
            const words = shuffleArray([...unitsData[unitId].words]);
            let currentIndex = 0;
            const container = document.getElementById('word-activity-container');

            function showCard() {
                const word = words[currentIndex];
                const frontLang = direction === 'en-ar' ? 'en' : 'ar';
                const backLang = direction === 'en-ar' ? 'ar' : 'en';
                
                container.innerHTML = `
                    <div class="flashcard-container">
                        <div class="flashcard" onclick="this.classList.toggle('is-flipped')">
                            <div class="flashcard-face flashcard-front ${frontLang === 'ar' ? '' : 'en-text'}">${word[frontLang]}</div>
                            <div class="flashcard-face flashcard-back ${backLang === 'ar' ? '' : 'en-text'}">${word[backLang]}</div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center mt-4">
                        <button id="prev-card" class="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">&lt; السابق</button>
                        <span class="text-gray-600">${currentIndex + 1} / ${words.length}</span>
                        <button id="next-card" class="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">التالي &gt;</button>
                    </div>
                `;

                document.getElementById('prev-card').onclick = () => {
                    currentIndex = (currentIndex - 1 + words.length) % words.length;
                    showCard();
                };
                document.getElementById('next-card').onclick = () => {
                    currentIndex = (currentIndex + 1) % words.length;
                    showCard();
                };
            }
            showCard();
        }

        function startMatchingMode(unitId) {
            const words = shuffleArray([...unitsData[unitId].words]).slice(0, 5); // Take 5 random words for a game
            const container = document.getElementById('word-activity-container');
            let selectedEn = null, selectedAr = null;
            let correctMatches = 0;

            const enWords = shuffleArray(words.map(w => w));
            const arWords = shuffleArray(words.map(w => w));

            container.innerHTML = `
                <h3 class="text-xl font-bold text-center mb-4">اربط الكلمة الإنجليزية بمعناها العربي</h3>
                <div class="grid grid-cols-2 gap-4">
                    <div id="en-list" class="space-y-2">${enWords.map((w, i) => `<div class="match-item p-3 rounded-lg bg-gray-100 en-text" data-lang="en" data-word="${w.en}">${w.en}</div>`).join('')}</div>
                    <div id="ar-list" class="space-y-2">${arWords.map((w, i) => `<div class="match-item p-3 rounded-lg bg-gray-100" data-lang="ar" data-word="${w.ar}">${w.ar}</div>`).join('')}</div>
                </div>
                <div id="match-feedback" class="text-center mt-4 font-semibold h-6"></div>
            `;
            
            document.querySelectorAll('.match-item').forEach(item => {
                item.onclick = (e) => {
                    const target = e.target;
                    const lang = target.dataset.lang;
                    const word = target.dataset.word;

                    if (lang === 'en') {
                        if (selectedEn) selectedEn.classList.remove('selected');
                        selectedEn = target;
                        selectedEn.classList.add('selected');
                    } else {
                        if (selectedAr) selectedAr.classList.remove('selected');
                        selectedAr = target;
                        selectedAr.classList.add('selected');
                    }

                    if (selectedEn && selectedAr) {
                        const enWord = selectedEn.dataset.word;
                        const arWord = selectedAr.dataset.word;
                        const correctPair = words.find(w => w.en === enWord && w.ar === arWord);

                        if (correctPair) {
                            selectedEn.classList.add('correct');
                            selectedAr.classList.add('correct');
                            correctMatches++;
                            if (correctMatches === words.length) {
                                document.getElementById('match-feedback').textContent = 'ممتاز! لقد أكملت التمرين.';
                                document.getElementById('match-feedback').classList.add('text-green-600');
                            }
                        } else {
                            selectedEn.classList.add('incorrect');
                            selectedAr.classList.add('incorrect');
                            setTimeout(() => {
                                selectedEn.classList.remove('incorrect');
                                selectedAr.classList.remove('incorrect');
                            }, 500);
                        }
                        selectedEn.classList.remove('selected');
                        selectedAr.classList.remove('selected');
                        selectedEn = null;
                        selectedAr = null;
                    }
                }
            });
        }

        function startQuizMode(unitId) {
            const allWords = unitsData[unitId].words;
            const wordsForQuiz = shuffleArray([...allWords]);
            let currentIndex = 0;
            const container = document.getElementById('word-activity-container');

            function showQuestion() {
                const correctWord = wordsForQuiz[currentIndex];
                const options = [correctWord];
                
                const wrongWords = shuffleArray(allWords.filter(w => w.en !== correctWord.en)).slice(0, 3);
                options.push(...wrongWords);

                const shuffledOptions = shuffleArray(options);

                container.innerHTML = `
                    <h3 class="text-xl font-bold text-center mb-4">ما هي الترجمة الإنجليزية لكلمة "${correctWord.ar}"؟</h3>
                    <div id="quiz-options" class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        ${shuffledOptions.map(opt => `<button class="match-item p-4 rounded-lg bg-gray-100 en-text" data-correct="${opt.en === correctWord.en}">${opt.en}</button>`).join('')}
                    </div>
                    <div id="quiz-feedback" class="text-center mt-4 font-semibold h-6"></div>
                    <div class="text-center mt-4"><button id="next-quiz" class="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 hidden">التالي</button></div>
                `;

                document.querySelectorAll('#quiz-options button').forEach(button => {
                    button.onclick = (e) => {
                        const isCorrect = e.target.dataset.correct === 'true';
                        const feedback = document.getElementById('quiz-feedback');
                        if (isCorrect) {
                            e.target.classList.add('correct');
                            feedback.textContent = 'صحيح!';
                            feedback.classList.add('text-green-600');
                        } else {
                            e.target.classList.add('incorrect');
                            feedback.textContent = 'خطأ. حاول مرة أخرى.';
                            feedback.classList.add('text-red-600');
                        }
                        document.querySelectorAll('#quiz-options button').forEach(btn => btn.disabled = true);
                        document.getElementById('next-quiz').classList.remove('hidden');
                    };
                });
                
                document.getElementById('next-quiz').onclick = () => {
                    currentIndex++;
                    if (currentIndex < wordsForQuiz.length) {
                        showQuestion();
                    } else {
                        container.innerHTML = `<p class="text-center text-2xl font-bold text-green-600">لقد أكملت الاختبار بنجاح!</p>`;
                    }
                };
            }
            showQuestion();
        }

        // --- CORE APP LOGIC ---
        function updateActiveLink(lessonId) {
             document.querySelectorAll('#lesson-nav .lesson-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-lessonid') === lessonId) {
                    link.classList.add('active');
                }
            });
        }

        function initializeApp() {
            lessonNav.innerHTML = '';
            for (const unitId in unitsData) {
                const unit = unitsData[unitId];
                const unitHeader = document.createElement('h3');
                unitHeader.className = 'unit-header';
                unitHeader.textContent = unit.title;
                lessonNav.appendChild(unitHeader);

                const lessonList = document.createElement('ul');
                lessonList.className = 'space-y-2';
                lessonNav.appendChild(lessonList);

                for (const lessonId in unit.lessons) {
                    const lesson = unit.lessons[lessonId];
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = '#';
                    a.textContent = lesson.title;
                    a.className = 'lesson-link block px-4 py-2 rounded-lg';
                    
                    if(lesson.type === 'review') a.classList.add('review-link');
                    if(lesson.type === 'additional-review') a.classList.add('additional-review-link');
                    if(lesson.type === 'word-basket') a.classList.add('word-basket-link');

                    a.setAttribute('data-unitid', unitId);
                    a.setAttribute('data-lessonid', lessonId);
                    a.onclick = (e) => { e.preventDefault(); renderLesson(unitId, lessonId); };
                    li.appendChild(a);
                    lessonList.appendChild(li);
                }
            }
            renderLesson('unit-1', 'lesson-1');
        }

        function speakText(text, lang, rate = 1.0) {
            window.speechSynthesis.cancel();
            // Clean up text for better pronunciation in stories
            const cleanedText = text.replace(/([a-zA-Z]+:)/g, ''); 
            const utterance = new SpeechSynthesisUtterance(cleanedText);
            utterance.lang = lang;
            utterance.rate = rate;
            window.speechSynthesis.speak(utterance);
        }

        function checkExercise(unitId, lessonId) {
            const lesson = unitsData[unitId].lessons[lessonId];
            if (!lesson || !lesson.exercise) return;

            const answers = lesson.exercise.answers;
            let correctCount = 0;
            const feedbackEl = document.getElementById('exercise-feedback');

            for (const qId in answers) {
                const inputEl = document.getElementById(qId);
                const expectedAnswer = answers[qId];
                if (inputEl.value.trim().toLowerCase().replace(/[?.]/g, '') === expectedAnswer.replace(/[?.]/g, '')) {
                    inputEl.classList.remove('border-red-500');
                    inputEl.classList.add('border-green-500');
                    correctCount++;
                } else {
                    inputEl.classList.remove('border-green-500');
                    inputEl.classList.add('border-red-500');
                }
            }

            if (correctCount === Object.keys(answers).length) {
                feedbackEl.textContent = 'ممتاز! كل الإجابات صحيحة.';
                feedbackEl.className = 'mt-4 text-center font-semibold text-green-600 h-6';
            } else {
                feedbackEl.textContent = 'حاول مرة أخرى.';
                feedbackEl.className = 'mt-4 text-center font-semibold text-red-600 h-6';
            }
        }
        
        document.addEventListener('DOMContentLoaded', initializeApp);
    </script>
</body>
</html>
