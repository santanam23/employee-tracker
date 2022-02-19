INSERT INTO department 
    (name)
VALUES
('Software Engineer'),
('Account Manager'),
('Lead Engineer'),
('Salesperson'),
('Accountant'),
('Legal Team Lead'),
('Lawyer');

INSERT INTO role
    (title, salary, department_id)
VALUES
('Sales', 80000, 1),
('Engineering', 150000, 2),
('Engineering', 120000, 2),
('Finance', 160000, 3),
('Finance', 125000, 3),
('Legal', 250000, 4),
('Legal', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
('Mike', 'Jones', 1, NULL),
('Ashley', 'Tinsdale', 2, 2),
('Kevin', 'Ramos', 3, 3),
('Kunal', 'Singh', 4, NULL),
('Malia', 'Brown', 5, 5),
('Sarah', 'Lourde', 6, NULl),
('Tom', 'Allen', 7, NULL);