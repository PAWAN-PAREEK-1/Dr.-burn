import React from "react";
import styles from "../style/books.module.css";

const Books = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Best selling books</h1>
        <h3 className="colorPrimary">WRITTEN BY ED MYLETT</h3>

        <div className={styles.books}>
          <div className={styles.Sbooks}>
            <div className={styles.book}>
              <img src="/images/book1.png" alt="" />

              <h1>The power of one more</h1>
              <p>
                In The Power of One More, renowned keynote speaker and
                performance expert Ed Mylett draws on 30 years of experience as
                an entrepreneur and coach to top athletes, entertainers, and
                business executives to reveal powerful strategies to help you
                live an extraordinary “one more” life.
              </p>

              <button>
                Buy Now
              </button>
            </div>
            <div className={styles.book}>
              <img src="/images/book1.png" alt="" />

              <h1>The power of one more</h1>
              <p>
                In The Power of One More, renowned keynote speaker and
                performance expert Ed Mylett draws on 30 years of experience as
                an entrepreneur and coach to top athletes, entertainers, and
                business executives to reveal powerful strategies to help you
                live an extraordinary “one more” life.
              </p>

              <button>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
