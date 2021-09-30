CREATE TABLE questions (
 id BIGSERIAL NOT NULL,
 product_id INTEGER,
 body VARCHAR(255),
 date_written BIGINT,
 asker_name VARCHAR(255),
 asker_email VARCHAR(255),
 reported BOOLEAN DEFAULT 'false'
 helpful INTEGER DEFAULT 0,
);


ALTER TABLE questions ADD CONSTRAINT questions_pkey PRIMARY KEY (id);

CREATE TABLE answers (
 id BIGSERIAL NOT NULL,
 question_id INTEGER,
 body VARCHAR(255),
 date_written BIGINT,
 answerer_name VARCHAR(255),
 answerer_email VARCHAR(255),
 reported BOOLEAN DEFAULT 'false'
 helpful INTEGER DEFAULT 0,
);


ALTER TABLE answers ADD CONSTRAINT answers_pkey PRIMARY KEY (id);

CREATE TABLE answer_photos (
 id BIGSERIAL,
 answer_id INTEGER,
 url VARCHAR(255)
);


ALTER TABLE answer_photos ADD CONSTRAINT answer_photos_pkey PRIMARY KEY (id);

ALTER TABLE answers ADD CONSTRAINT answers_question_id_fkey FOREIGN KEY (question_id) REFERENCES questions(id);
ALTER TABLE answer_photos ADD CONSTRAINT answer_photos_answer_id_fkey FOREIGN KEY (answer_id) REFERENCES answers(id);