import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  IconButton,
} from '@mui/material';
import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  containerStyle,
  gridStyle,
  headerRowStyle,
  dataRowStyle,
  clickableWorkListStyle,
  modalGridStyle,
  modalRowStyle,
  modalInputStyle,
  listItemStyle,
  dateGridStyle,
  sectionGridStyle,
  sectionHeaderStyle,
  modalContentStyle,
  modalHeaderStyle,
  modalActionsStyle,
} from './WorkList.styles';
import { useAuth } from '../../context/AuthContext';

type FormValues = {
  workListName: string;
  startDate: string;
  endDate: string;
  companies: { name: string }[];
  categories: { name: string }[];
  employees: { name: string }[];
  newCompany: string;
  newCategory: string;
  newEmployee: string;
};

export default function WorkList() {
  const { user } = useAuth();
  const isAdmin = user?.isAdmin;
  const [openModal, setOpenModal] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      workListName: '',
      startDate: '',
      endDate: '',
      companies: [],
      categories: [],
      employees: [],
      newCompany: '',
      newCategory: '',
      newEmployee: '',
    },
  });

  const {
    fields: companyFields,
    append: appendCompany,
    remove: removeCompany,
  } = useFieldArray({
    control,
    name: 'companies',
  });

  const {
    fields: categoryFields,
    append: appendCategory,
    remove: removeCategory,
  } = useFieldArray({
    control,
    name: 'categories',
  });

  const {
    fields: employeeFields,
    append: appendEmployee,
    remove: removeEmployee,
  } = useFieldArray({
    control,
    name: 'employees',
  });

  const handleAddCompany = () => {
    const newCompany = watch('newCompany');
    if (newCompany.trim()) {
      appendCompany({ name: newCompany.trim() });
      setValue('newCompany', '');
    }
  };

  const handleAddCategory = () => {
    const newCategory = watch('newCategory');
    if (newCategory.trim()) {
      appendCategory({ name: newCategory.trim() });
      setValue('newCategory', '');
    }
  };

  const handleAddEmployee = () => {
    const newEmployee = watch('newEmployee');
    if (newEmployee.trim()) {
      appendEmployee({ name: newEmployee.trim() });
      setValue('newEmployee', '');
    }
  };

  const handleWorkListClick = () => {
    if (isAdmin) {
      console.log('WorkList clicked');
    }
  };

  const handleClose = () => {
    setOpenModal(false);
    reset();
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
    handleClose();
  };

  return (
    <div css={containerStyle}>
      <div css={gridStyle}>
        {/* Header Row */}
        <div css={headerRowStyle}>
          <Typography variant="h6">Work Lists</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenModal(true)}
          >
            Add Task
          </Button>
        </div>

        {/* Data Row */}
        <div
          css={[dataRowStyle, isAdmin && clickableWorkListStyle]}
          onClick={handleWorkListClick}
        >
          <Typography variant="body1">Work List 1</Typography>
          <Button color="primary">Delete Task</Button>
        </div>
      </div>

      {/* Add Task Modal */}
      <Dialog open={openModal} onClose={handleClose} maxWidth="md" fullWidth>
        <div css={modalHeaderStyle}>
          <DialogTitle>Create Work List</DialogTitle>
          <Button onClick={handleClose}>Cancel</Button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent css={modalContentStyle}>
            <Box css={modalGridStyle}>
              {/* Work List Name */}
              <Box css={modalRowStyle}>
                <TextField
                  label="Work List Name"
                  fullWidth
                  {...register('workListName', {
                    required: 'Work list name is required',
                  })}
                  error={!!errors.workListName}
                  helperText={errors.workListName?.message}
                />
              </Box>

              {/* Dates */}
              <Box css={dateGridStyle}>
                <TextField
                  label="Start Date"
                  type="date"
                  {...register('startDate', {
                    required: 'Start date is required',
                  })}
                  error={!!errors.startDate}
                  helperText={errors.startDate?.message}
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  label="End Date"
                  type="date"
                  {...register('endDate', { required: 'End date is required' })}
                  error={!!errors.endDate}
                  helperText={errors.endDate?.message}
                  InputLabelProps={{ shrink: true }}
                />
              </Box>

              {/* Companies Section */}
              <Box css={sectionGridStyle}>
                <Box css={sectionHeaderStyle}>
                  <Typography variant="subtitle1">Company</Typography>
                </Box>
                <Box css={modalInputStyle}>
                  <TextField
                    label="Enter Company Name"
                    value={watch('newCompany')}
                    onChange={(e) => setValue('newCompany', e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddCompany();
                      }
                    }}
                  />
                  <Button onClick={handleAddCompany} variant="contained">
                    Add
                  </Button>
                </Box>
                {companyFields.map((field, index) => (
                  <Box key={field.id} css={listItemStyle}>
                    <Typography>{field.name}</Typography>
                    <IconButton onClick={() => removeCompany(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
              </Box>

              {/* Categories Section */}
              <Box css={sectionGridStyle}>
                <Box css={sectionHeaderStyle}>
                  <Typography variant="subtitle1">Category</Typography>
                </Box>
                <Box css={modalInputStyle}>
                  <TextField
                    label="Enter Category Name"
                    value={watch('newCategory')}
                    onChange={(e) => setValue('newCategory', e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddCategory();
                      }
                    }}
                  />
                  <Button onClick={handleAddCategory} variant="contained">
                    Add
                  </Button>
                </Box>
                {categoryFields.map((field, index) => (
                  <Box key={field.id} css={listItemStyle}>
                    <Typography>{field.name}</Typography>
                    <IconButton onClick={() => removeCategory(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
              </Box>

              {/* PICs Section */}
              <Box css={sectionGridStyle}>
                <Box css={sectionHeaderStyle}>
                  <Typography variant="subtitle1">PICs</Typography>
                </Box>
                <Box css={modalInputStyle}>
                  <TextField
                    label="Enter Employee Name"
                    value={watch('newEmployee')}
                    onChange={(e) => setValue('newEmployee', e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddEmployee();
                      }
                    }}
                  />
                  <Button onClick={handleAddEmployee} variant="contained">
                    Add
                  </Button>
                </Box>
                {employeeFields.map((field, index) => (
                  <Box key={field.id} css={listItemStyle}>
                    <Typography>{field.name}</Typography>
                    <IconButton onClick={() => removeEmployee(index)}>
                      <RemoveIcon />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            </Box>
          </DialogContent>
          <DialogActions css={modalActionsStyle}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Create
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
