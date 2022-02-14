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
    (title, salary, department_id,)
VALUES
('Sales', 80000, 2),
('Engineering', 150000, 3),
('Engineering', 120000, 4),
('Finance', 160000, 5),
('Finance', 125000, 6),
('Legal', 250000, 7),
('Legal', 190000, 8);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
(),
(),
(),
(),
(),
(),
();