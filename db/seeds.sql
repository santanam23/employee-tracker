INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Ron', 'Swanson', 1, NULL),
  ('Victoria', 'Justince', 2, 2),
  ('Jack', 'Black', 3, 3),
  ('Charles', 'Barkley', 4, NULL),
  ('Kevin', 'Hart', 5, 5),
  ('Dora', 'Explorer', 6, NULL),
  ('Edward', 'Bel', 7, 7),
  ('Monty', 'Summers', 8, NULL),
  ('Octavia', 'Butler', 8, NULL),
  ('Unica', 'Zurn', 9, NULL);

INSERT INTO department (name, description)
VALUES 
    ('Sales', 'Focuses on making sure the department is making its sales quota throughout the year'),
    ('Engineering', 'Focuses on making sure our systems are running in place and we do not have any unexpected issues'),
    ('Finance', 'Focuses on making sure we are spending within our budget'),
    ('Legal', 'Focuses on legal matters and makes sure our contracts are beneficial for the company');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Sales', 80000, 1),
  ('Engineering', 150000, 2),
  ('Engineering', 120000, 2),
  ('Finance', 160000, 3),
  ('Finance', 125000, 3),
  ('Legal', 250000, 4),
  ('Legal', 190000, 4);