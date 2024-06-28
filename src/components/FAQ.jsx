const questions = [
    {
        question: "What is OpenPost?",
        answer: "OpenPost is a free and open-source blogging platform that allows you to create and share your content with the world. It is built on top of the popular open-source project, Appwrite.",
    },

    {
        question: "Is it free?",
        answer: "Yes, OpenPost is completely free to use. You can use it for personal or commercial purposes. There is no cost to use OpenPost.",
    },
    {
        question: "How do I get started?",
        answer: "To get started with OpenPost, you need to create an account on the platform. Once you have an account, you can create a new blog post or edit an existing one. ",
    },
];

export default function FAQ() {
    return (
        <section className="px-2">
            <div className="mx-auto max-w-7xl py-10">
                <div>
                    <div className="max-w-2xl">
                        <h1 className="text-2xl font-bold text-[#EBE6C8]">
                            Frequently Asked Questions
                        </h1>
                        <p className="mt-4 text-sm leading-6 tracking-wide text-[#EBE6C8]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                        {questions.map((question) => (
                            <div
                                key={question.question}
                                className="rounded-md border border-[#EBE6C8] p-6"
                            >
                                <dt className="text-lg font-semibold leading-6 text-[#EBE6C8]">
                                    {question.question}
                                </dt>
                                <dd className="mt-2 text-sm text-[#EBE6C8]">
                                    {question.answer}
                                </dd>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
