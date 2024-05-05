import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy.svg';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    code: string;
}

export const Code = ({ className, code }: CodeProps) => {
    const handleCopyButton = async () => {
        try {
            await navigator.clipboard.writeText(code);
        } catch (error) {
            console.log('copyError', error);
        }
    };

    return (
        <div className={classNames(cls.codeWrap, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button
                className={cls.copyButton}
                onClick={handleCopyButton}
                theme="clear"
            >
                <CopyIcon className={cls.icon} />
            </Button>

            <div className={classNames(cls.code, {}, [className])}>

                <pre>
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
};
