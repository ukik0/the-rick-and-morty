import {FC} from 'react';
import {Typography} from '@/components';
import {useForm} from '@/app/utils';
import {trpc} from "@/utils/trpc";
import cl from './WriteNameStep.module.scss';

interface WriteNameStepProps {
    next: (value: { name: string }) => void;
}

export const WriteNameStep: FC<WriteNameStepProps> = ({ next }) => {
    const form = useForm({ initialValues: { name: '' } });

    const checkUniqueNameMutation = trpc.isUniqueName.useMutation()
    const handleButtonClick = async () => {
        const isUniqueName = await checkUniqueNameMutation.mutateAsync({name: form.values.name})

        if (!isUniqueName.response) return form.setFieldError('name', 'Пользователь уже есть в таблице')

        if (form.values.name.trim().length <= 5) {
            return form.setFieldError('name', 'Длина поля должна быть не менее 6 символов');
        }

        return next({ name: form.values.name });
    };

    return (
        <div className={cl.wrapper}>
            <Typography tag={'h1'} variant={'title-1'} className={cl.title}>
                Died or Alive or Unknown
            </Typography>

            <Typography tag={'label'} variant={'body-1'} className={cl.label}>
                Введите имя
            </Typography>

            <input
                value={form.values.name}
                type='text'
                className={cl.input}
                placeholder={'Введите имя'}
                onChange={(e) => form.setFieldValue('name', e.target.value)}
                maxLength={30}
            />

            <button disabled={checkUniqueNameMutation.isLoading} onClick={handleButtonClick} className={cl.btn}>
                start
            </button>

            {form.errors?.name && <Typography tag={'span'} variant={'sub-title-2'}>{form.errors.name}</Typography>}
        </div>
    );
};
